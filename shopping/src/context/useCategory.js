import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [ categories, setCategories ] = useState([]);

  const getCat = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/Category/get-category"
      );
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return categories;
}
