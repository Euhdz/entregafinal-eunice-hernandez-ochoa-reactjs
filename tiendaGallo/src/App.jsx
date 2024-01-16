import ItemCount from "./Components/ItemCount/ItemCount";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a tu tienda de tamales!" />
      <ItemCount stock={10} />
      <ItemCount stock={5} />
      <ItemDetailContainer />
    </>
  );
};

export default App;
