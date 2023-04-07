import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/techgrablogo.png";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const logo = (
  <div>
    <NavLink to="/">
      <img className="logo" src={Logo} alt="Tech Grab Logo" />
    </NavLink>
  </div>
);

const cart = (
  <NavLink to="cart" className="cart-icon">
    <FaShoppingCart />
    <p>0</p>
  </NavLink>
);

const Header = () => {
  return (
    <header>
      {logo}
      <nav className="navbar">
        <ul>
          <li className="nav-items">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="about">About</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="links">
        <NavLink to="login">
          <FaUserCircle />
        </NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="order-history">My Orders</NavLink>
        {cart}
      </div>
    </header>
  );
};

export default Header;
