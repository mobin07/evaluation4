import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div data-cy="navbar" className="move">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link"><Link to="/">logo</Link></a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">Cart:()</div>
        <button data-cy="navbar-login-logout-button">{isAuthenticated?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
