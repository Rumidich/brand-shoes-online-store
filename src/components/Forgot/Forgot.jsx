import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { forgotContext } from "../../contexts/ForgotContext";
import "../Login/log.css";

const Forgot = () => {
  const navigate = useNavigate();
  const { handleForgot } = useContext(forgotContext);
  const [email, setEmail] = useState("");
  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    handleForgot(formData, email, navigate);
  }
  return (
    <div className="overlays">
      <div class="login-box">
        <h2>Forgot password</h2>
        <form>
          <h6 style={{ marginBottom: "40px" }}>
            Lost your password? Please enter your email address.You will receive
            a message via email to create a get your new password
          </h6>
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

          <a
            onClick={() => {
              handleSave();
              navigate("/successfull-registration");
            }}
            href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
