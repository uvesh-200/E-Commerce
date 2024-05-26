import React, { useState, useEffect } from "react";
import Layouts from "../../Components/Layouts/layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const createProduct = () => {
  const [category, setCategory] = useState("");
  const [cat, setCat] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //to get all Category
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
      toast.error("Something went Wrong in getting Category");
    }
  };
  useEffect(() => {
    getAllCat();
  }, []);

  const Create = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );

      if (data?.success) {
        toast.success("Product Created Successfully");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layouts>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 create">
            <h2>Create Product</h2>
            <div className="m-1">
              <Select
                placeholder="Select Category"
                showSearch
                size="large"
                className="form-select mb-3"
                onChange={(values) => {
                  setCategory(values);
                }}
              >
                {cat?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
                <div className="mb-3">
                  {photo && (
                    <div>
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="Selected Photo"
                        height={"100px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter a Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text-area"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    placeholder="Enter a Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter a Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Select
                    placeholder="Select Shipping"
                    showSearch
                    onChange={(values) => {
                      setShipping(values);
                    }}
                  >
                    <Option value="0" key="">
                      Yes
                    </Option>
                    <Option value="1" key="">
                      No
                    </Option>
                  </Select>
                </div>
                <button className="btn btn-primary" onClick={Create}>
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default createProduct;
