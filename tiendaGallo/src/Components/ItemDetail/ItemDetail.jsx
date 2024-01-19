import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, descripcion, precio, img }) => {
  return (
    <div className="contenedorItem">
      <h2>{nombre} </h2>
      <img src={img} alt={nombre} />
      <h3> {descripcion}</h3>
      <h3>Precio: ${precio} </h3>
      <p>ID: {id} </p>
    </div>
  );
};

export default ItemDetail;
