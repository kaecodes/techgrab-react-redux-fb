import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/techgrablogo.png";

const cart = (
  <NavLink to="cart" className="cart-icon">
    <FaShoppingCart />
    <p>0</p>
  </NavLink>
);

const activeLink = ({ isActive }) => (isActive ? "active-link" : "");

const logo = (
  <div>
    <NavLink to="/">
      <img className="logo" src={Logo} alt="Tech Grab Logo" />
    </NavLink>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className={isOpen ? "overlay active" : "overlay"}></div>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <div className="mobile-menu-header">
          <img src={Logo} alt="Tech Grab Logo" />
          <div className="mobile-icons">
            {cart}
            <AiOutlineClose className="close-menu" onClick={handleClick} />
          </div>
        </div>

        <li className="nav-items">
          <NavLink
            to="/"
            onClick={isOpen ? handleClick : null}
            className={activeLink}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to="about"
            onClick={isOpen ? handleClick : null}
            className={activeLink}
          >
            About
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to="contact"
            onClick={isOpen ? handleClick : null}
            className={activeLink}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to="shop"
            onClick={isOpen ? handleClick : null}
            className={activeLink}
          >
            Shop
          </NavLink>
        </li>
        {isOpen ? (
          <div>
            <li className="nav-items">
              <NavLink to="login">Account</NavLink>
            </li>
          </div>
        ) : null}
      </ul>
      <div className="mobile">
        {cart}
        <div className="hamburger" onClick={handleClick}>
          <AiOutlineMenu className="menu-bars" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
