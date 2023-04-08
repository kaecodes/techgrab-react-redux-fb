import { NavLink } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

const cart = (
  <NavLink to="cart" className="cart-icon">
    <FaShoppingCart />
    <p>0</p>
  </NavLink>
);

const Links = () => {
  return (
    <>
      <div className="links">
        <NavLink to="login">
          <FaUserCircle />
        </NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="order-history">My Orders</NavLink>
        {cart}
      </div>
    </>
  );
};

export default Links;
