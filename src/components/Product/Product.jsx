import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { img, name, seller, quantity, price, ratings } = props.product;
  return (
    <div className="product">
      {/* <h3>This is product</h3> */}
      <img src={img} alt="" />
      <div className="product-info"> 
        <h6 className="product-name">{name}</h6>
        <p>Price:{price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Quantity:{quantity}</p>
        <p>Ratings:{ratings} star</p>
      </div>
      <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
