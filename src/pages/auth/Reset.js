import { Link } from "react-router-dom";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";
import "./auth.css";

const Reset = () => {
  return (
    <section className="login-container">
      <div className="login-img-container">
        <img src={resetImg} alt="Reset Password" width="500" />
      </div>
      <Card className="login-card">
        <div className="login-form">
          <h2>Reset Password</h2>
          <form action="">
            <input type="email" placeholder="Email" required />
            <button className="btn btn-block btn-primary">
              Reset Password
            </button>
            <div className="reset-links">
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
