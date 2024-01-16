import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
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
