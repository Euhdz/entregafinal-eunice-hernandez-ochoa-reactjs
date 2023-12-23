import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <img
        className="logo-header"
        src="./img/logo_tamales_gallo.png"
        alt="Logo Tamales Gallo"
      />
      <h1>Tamales Gallo</h1>

      <nav>
        <ul>
          <li>Tamales</li>
          <li>Atoles</li>
          <li>Postres</li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
