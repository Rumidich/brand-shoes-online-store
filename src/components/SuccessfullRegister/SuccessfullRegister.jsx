import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SuccessfullRegister/sc.css";

const SuccessfullRegister = () => {
  const navigate = useNavigate();
  return (
    <div class="main-container">
      <div class="check-container">
        <div class="check-background">
          <svg
            viewBox="0 0 65 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 25L27.3077 44L58.5 7"
              stroke="white"
              stroke-width="13"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="reg">
          <div className="reg"></div>
          <button
            onClick={() => navigate("/login")}
            id="alch"
            className="reg"
            href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullRegister;
