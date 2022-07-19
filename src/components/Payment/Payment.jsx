import React from "react";
import { useNavigate } from "react-router-dom";
import "../Payment/payment.css";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="align-center">
      <div id="card">
        <header>
          <h3 className="card-title">Payment Details</h3>
          <img
            width="128"
            alt="Visa Inc. logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/128px-Visa_Inc._logo.svg.png"
            className="logo"
          />
        </header>

        <form action="" className="forms">
          <div className="card-number">
            <label>Card Number</label>
            <input
              id="number"
              type="text"
              size="40"
              placeholder="1234 1234 1234 1234"
              required
            />
          </div>

          <div className="card-name">
            <label>Name</label>
            <input
              id="name"
              type="text"
              size="40"
              required
              placeholder="Your Name"
            />
          </div>

          <div className="input-row">
            <div className="select-date">
              <label>Expiration</label>
              <select name="" id="date">
                <option value="00"></option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="" id="date">
                <option value="0000"></option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
            </div>

            <div className="card-cvc">
              <label>CVC</label>
              <input id="cvc" type="text" size="5" placeholder="123" required />
            </div>

            <button
              onClick={() => navigate("/products")}
              className="buy-button">
              Complete Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
