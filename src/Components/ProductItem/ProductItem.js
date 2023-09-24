import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  console.log();
  return (
    <div className="col-lg-4 col-md-6 border-info p-4 border border-2">
      <Link to={`/product/${product.id}`} >
        <img className="prod-img" src={product?.thumbnail} alt="" />
        <h2>{product?.title}</h2>
        <h3>{product?.brand}</h3>
        <h4>{product?.category}</h4>
      </Link>
    </div>
  );
};

export default ProductItem;
