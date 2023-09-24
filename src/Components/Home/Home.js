import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import Card from "../Card/Card";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function getData() {
    let { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);
    console.log(products);
  }
  useEffect(() => {
    getData();
  }, []);


  // console.log(products);
  // if (!products)
  //   return <Card />

  return (
    <div className="container">
      <div className="row">
        {products?.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
