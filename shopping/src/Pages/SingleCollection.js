import React, { useState, useEffect } from "react";
import Layout from "../Components/Layouts/layout";
import axios from "axios";
import { Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";

const SingleCollection = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (param?.slug) getbyCat();
  }, [param?.slug]);

  const getbyCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-category/${param.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center">{category?.name}</h1>
        <h6 className="text-center">{products?.length} Results Found</h6>
        <div className="row">
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div
                className="card m-2"
                style={{ width: "16rem", height: "auto" }}
              >
                <img
                  className="imag"
                  style={{ height: "16rem" }}
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                />
                <div className="cardbody">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text ml-3 mr-3">
                    {p.description.substring(0, 100)}...
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
        </div>
      </div>
    </Layout>
  );
};

export default SingleCollection;
