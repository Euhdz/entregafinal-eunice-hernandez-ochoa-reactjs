import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img
        className="imgCarrito"
        src="../img/shopping-cart.png"
        alt="shopping cart"
      />
      <strong> 1 </strong>
    </div>
  );
};

export default CartWidget;
