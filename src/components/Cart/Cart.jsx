import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // Medium tough solution to make product quantity 1
    // if(product.quantity===0){
    //   product.quantity = 1;
    // }
    // short cut way to make quantity one 
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + tax + totalShipping;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>TotalPrice:${totalPrice}</p>
      <p>TotalShipping:${totalShipping}</p>
      <p>Tax:{tax.toFixed(2)}</p>
      <h6>GrandTotal:{grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
