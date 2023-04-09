import "./auth.css";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="login-container">
      <Card className="login-card">
        <div className="login-form">
          <h2>Register</h2>
          <form action="">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="btn btn-block btn-primary">Register</button>
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
  );
};

export default Register;
