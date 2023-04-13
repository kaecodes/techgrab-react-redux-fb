import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/techgrablogo.png";
import { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER } from "../../redux/features/authSlice";
import { REMOVE_ACTIVE_USER } from "../../redux/features/authSlice";

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

const activeLink = ({ isActive }) => (isActive ? "active-link" : "");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // Set default username/userID - Remove all characters after @ including @
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"))
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  }, [dispatch, displayName]);

  const handleClick = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header>
      <ToastContainer />
      {logo}
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
                <NavLink to="login" onClick={isOpen ? handleClick : null}>
                  Account
                </NavLink>
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
      <div className="links">
        <NavLink to="login">
          {displayName ? `Hi, ${displayName}` : <FaUserCircle />}
        </NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="order-history">My Orders</NavLink>
        <NavLink to="/" onClick={logoutUser}>
          {displayName ? "Logout" : ""}
          {/* Logout */}
        </NavLink>
        {cart}
      </div>
    </header>
  );
};

export default Header;
