import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const cart = (
  <NavLink to="cart" className="cart-icon">
    <FaShoppingCart />
    <p>0</p>
  </NavLink>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
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
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
