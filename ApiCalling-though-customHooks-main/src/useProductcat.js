import { useState, useEffect } from "react";
function useProductcat(categoryName) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
     .then((res) => (res.json()))
     .then((res) => setdata(res))
  }, [data]);
  return data;
} 

export default useProductcat;