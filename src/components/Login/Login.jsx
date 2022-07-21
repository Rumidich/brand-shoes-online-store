import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "../Login/log.css";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }
  // console.log(error);

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className="overlays">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name=""
              required=""
            />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              name=""
              required=""
            />
            <label>Password</label>
          </div>

          <a onClick={handleSave} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
          <div>
            <h4
              onClick={() => navigate("/registration/")}
              style={{ marginTop: "20px" }}>
              Sign Up
            </h4>
          </div>
          <Link style={{ fontSize: "9px" }} to="/forgot">
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
