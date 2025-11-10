import { useState, useEffect } from "react";
import Search from "./Search";
import Products from "./Products";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data); // show all products initially
      })
      .catch((error) => console.log("Unable to load data", error));
  }, []); // ✅ empty dependency so it doesn't run every second

  const searchHandler = (query) => {
    const data = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(data);
  };

  return (
    <div className="body">
      <Search searchHandler={searchHandler} />
      <Products products={filteredData} />
    </div>
  );
};

export default Body;
