import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, descripcion, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>{nombre} </h2>
      <img src={img} alt={nombre} />
      <h3> {descripcion}</h3>
      <h3>Precio: ${precio} </h3>
      <p>ID: {id} </p>
      <p>Stock: {stock} </p>

      {}

      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar Compra </Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
