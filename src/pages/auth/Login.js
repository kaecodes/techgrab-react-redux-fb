import "./auth.css";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-img-container">
        <img src={loginImg} alt="Login" width="500" />
      </div>
      <Card className="login-card">
        <div className="login-form">
          <h2>Login</h2>
          <form action="">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn btn-block btn-primary">Login</button>
            <div>
              <Link to="reset">Forgot Password?</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="btn btn-block btn-danger google">
            <FaGoogle /> Login with Google
          </button>
          <span>
            <p>Don't have an account?</p>
            <Link to="register">Register Now</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
