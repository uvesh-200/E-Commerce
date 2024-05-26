import React from "react";
import { useSearch } from "../context/Search";
import Layout from "../Components/Layouts/layout";
import { Button } from "antd";

const SearchPage = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
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
                   <Button className="more">More Details</Button>
                   <Button className="atc">Add to Cart</Button>
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

export default SearchPage;
