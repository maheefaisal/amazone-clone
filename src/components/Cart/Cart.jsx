import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
    let total = 0;
    for (const product of cart){
        total= total+ product.price;
    }
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>TotalPrice:{total}</p>
      <p>TotalShipping:</p>
      <p>Tax:</p>
      <h6>GrandTotal:</h6>
    </div>
  );
};

export default Cart;
