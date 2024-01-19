import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProducto">
      <img src={img} alt={nombre} />
      <h3>Producto: {nombre} </h3>
      <p>ID: {id} </p>
      <Link to={`/item/${id}`}> Ver Detalles </Link>
      {/* <button> Ver detalles </button> */}
    </div>
  );
};

export default Item;
