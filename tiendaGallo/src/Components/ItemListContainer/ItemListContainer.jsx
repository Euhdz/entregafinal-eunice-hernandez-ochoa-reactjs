import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../asyncmock";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => setProductos(respuesta));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
