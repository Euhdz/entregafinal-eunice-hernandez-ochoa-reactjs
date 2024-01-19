import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: ${precio} </h3>
      <p>ID: {id} </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error
        fuga aspernatur quaerat quo deleniti ipsam repellat placeat adipisci
        repellendus voluptates earum tempore corrupti suscipit rerum iste
        temporibus, molestiae vel.
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
