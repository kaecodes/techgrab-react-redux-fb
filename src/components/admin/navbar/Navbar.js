import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { selectUserName } from "../../../redux/features/authSlice";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const activeLink = ({ isActive }) => (isActive ? "active-link" : "");

const Navbar = () => {
  const userName = useSelector(selectUserName);

  return (
    <div className="navbar">
      <div className="user">
        <FaUserCircle size={40} />
        {userName}
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <NavLink to="/admin/home" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/all-products" className={activeLink}>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-product/ADD" className={activeLink}>
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders" className={activeLink}>
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
