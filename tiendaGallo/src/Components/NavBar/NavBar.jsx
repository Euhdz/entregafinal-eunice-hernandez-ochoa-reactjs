import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tamales Gallo</h1>
      </Link>

      <img
        className="logo-header"
        src="./img/logo_tamales_gallo.png"
        alt="Logo Tamales Gallo"
      />
      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/1">Tamales</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/2">Atoles</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3">Postres</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
