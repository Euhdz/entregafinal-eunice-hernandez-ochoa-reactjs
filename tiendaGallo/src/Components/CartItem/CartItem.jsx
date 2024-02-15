import React from "react";

const CartItem = ({ item, cantidad }) => {
  return (
    <div>
      <h3> {item.nombre} </h3>
      <div className="cart-img">
        <img src={item.img} alt={item.nombre} />
      </div>

      <p> Cantidad: {cantidad} </p>
      <p> Precio: $ {item.precio} </p>
    </div>
  );
};

export default CartItem;
