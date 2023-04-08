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
          <AiOutlineClose className="close-menu" onClick={handleClick} />
        </div>

        <li className="nav-items">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="shop">Shop</NavLink>
        </li>
      </ul>
      <div className="mobile">
        {cart}
        <div className="hamburger" onClick={handleClick}>
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
