import React, { useEffect, useState } from "react";
import Layouts from "../Components/Layouts/layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Checkbox, Radio } from "antd";
import { Price } from "../Components/Price";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";

function Shop() {
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState([]);
  const [check, setCheck] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getAllCat = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/Category/get-category"
      );
      if (data?.success) {
        setCat(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCat();
  }, []);

  const getAllProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
    // eslint-disable-next-line
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTotal();
  });

  const filter = (value, id) => {
    let all = [...check];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setCheck(all);
  };

  useEffect(() => {
    if (!check.length || !radio.length) getAllProduct();
    // eslint-disable-next-line
  }, [check.length, radio.length]);

  useEffect(() => {
    if (check.length || radio.length) filterProduct();
  });

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/product/product-filters",
        {
          check,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layouts>
      <div className="row">
        <div className="col-md-3">
          <h4 className="text-center mt-3">Filter by Categories</h4>
          <div className="d-flex flex-column ml-5 mt-4">
            {cat?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => filter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          <br />
          {/* price filter */}
          <h4 className="text-center">Filter by Prices</h4>
          <div className="d-flex flex-column ml-5 mt-4">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Price?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column ml-5 mt-4">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h4 className="text-center mt-3">All products</h4>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div
                className="card m-2"
                style={{ width: "16rem", height: "28rem" }}
              >
                <img
                  className="imag"
                  style={{ height: "16rem" }}
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  alt="product photo"
                />
                <div className="cardbody">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text ml-3 mr-3">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-texts">₹ {p.price}</p>

                  <div className="addtocart">
                    <Button
                      onClick={() => navigate(`/productDetail/${p.slug}`)}
                      className="more"
                    >
                      More Details
                    </Button>
                    <Button
                      className="atc"
                      onClick={() => {
                        setCart([...cart, p]);

                        toast.success("Item Added to Cart");
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="m-2 p-3">
            {products && products.length < total && (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "loading..." : "Load More"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layouts>
  );
}
export default Shop;
