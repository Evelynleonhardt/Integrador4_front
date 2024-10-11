import './SearchBar.scss';
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <img src="/img/logo.png" alt="Logo de la página" />
      </div>
      
      <form action="#" className="search-bar__form-container" role="search">
        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
          placeholder="Busca lo que necesites!"
          aria-label="Buscar productos"
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>

      <div className="search-bar__carrito-container">
        <Link to="carrito" aria-label="Ir al carrito de compras">
          <img src="/img/carrito.png" alt="Carrito de compras" />
        </Link>
      </div>

      <div className="menu-toggle">
        <label htmlFor="menu" className="menu-toggle__label">
          <span className="menu-toggle__top-bread"></span>
          <span className="menu-toggle__meat"></span>
          <span className="menu-toggle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
