import "./auth.css";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    if (password != cPassword) {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="login-container">
        <Card className="login-card">
          <div className="login-form">
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button type="submit" className="btn btn-block btn-primary">
                Register
              </button>
            </form>
            <span>
              <p>Already have an account?</p>
              <Link to="/login">Login Now</Link>
            </span>
          </div>
        </Card>
        <div className="login-img-container">
          <img src={registerImg} alt="Register" width="500" />
        </div>
      </section>
    </>
  );
};

export default Register;
