import React from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/searchPage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <form
          className="d-flex formsearch"
          role="search"
          onSubmit={handleSubmit}
        >
          <input
            className="btnsearch"
            type="search"
            placeholder="Search here"
            aria-label="Search"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
          <button className="btnsearch" type="submit">
            <FaSearch style={{ marginTop: "5px" }} />
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </form>
      </div>
    </div>
  );
};

export default Search;
