import React from "react";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <img src={img} alt={nombre} />
      <h3>Producto: {nombre} </h3>
      <p>ID: {id} </p>
      <button> Ver detalles </button>
    </div>
  );
};

export default Item;
