import React from "react";
import TelegramChat from "../TelegramChat/TelegramChat";
import { useNavigate } from "react-router-dom";
import ".././../App.css";
import Example from "../Carousel/Carousel";
import CookieConsent from "react-cookie-consent";
import Ad from "../Ad/Ad";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <Ad />
        <div id="innerpage">
          <div className="innerpage">
            <div className="col">
              <h1
                id="h"
                style={{ marginTop: "70px", fontSize: "50px" }}
                className="fronts">
                Sneakers Store
              </h1>
              <p
                style={{ fontSize: "20px", color: "white" }}
                className="fronts">
                THE FUTURE IS IN THE AIR
              </p>
            </div>

            <button
              onClick={() => navigate("/products")}
              className="buttonchik"
              type="button">
              Shop
            </button>
          </div>
        </div>
      </>
      <>
        <div>
          {" "}
          <div className="columnchik">
            <div
              onClick={() => navigate("/products")}
              className="card card1"></div>
            <div
              onClick={() => navigate("/products")}
              className="card card2"></div>
            <div
              onClick={() => navigate("/products")}
              className="card card3"></div>
          </div>
        </div>
      </>
      <>
        <main className="flex" style={{ display: "flex" }}>
          <article className="landing-page">
            <div className="darkener">
              <div className="wrapper flex-column">
                <p className="top-logo"></p>
                <h1 className="landing-page-title">
                  <strong></strong>
                </h1>
                <h2 className="page-subtitle"></h2>
              </div>
            </div>
          </article>
          <article className="landing-page2">
            <div className="darkener2">
              <div className="wrapper2 flex-column2">
                <p className="top-logo"></p>
                <h1 className="landing-page-title">
                  <strong></strong>
                </h1>
                <h2 className="page-subtitle"></h2>
              </div>
            </div>
          </article>
          <TelegramChat />
        </main>
      </>
      <Example />
      <div className="desk">
        <div class="contai">
          <div class="r3-c1">
            <img
              onClick={() => navigate("/products")}
              style={{ width: "300px", height: "300px" }}
              src="https://i.ibb.co/R0Y8T8r/nike19.png"
            />
          </div>
          <div class="r1-c3">
            <img
              id="centerimg"
              onClick={() => navigate("/products")}
              style={{ width: "300px", height: "300px" }}
              src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/36.png"
            />
          </div>{" "}
          <div class="r3-c2">
            <img
              onClick={() => navigate("/products")}
              style={{ width: "300px", height: "300px" }}
              src="https://i.ibb.co/ZMVHp6x/nike-air-solstice.png"
            />
          </div>
        </div>
      </div>
      <CookieConsent style={{ background: "red" }} debug={true} expires={365}>
        This site uses cookies. See our{" "}
        <a href="https://trust-technique.com/privacy-policy/?gc_id=16599186704&utm_source=google&utm_medium=&utm_id=16599186704&utm_content=&utm_term=&creativeId=&gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2FPvVNqsax2X4XrXMjXLGEHToP6cPFnLg56w3-TCSOXOTPFbhC51TsaAvFJEALw_wcB&gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2FPvVNqsax2X4XrXMjXLGEHToP6cPFnLg56w3-TCSOXOTPFbhC51TsaAvFJEALw_wcB">
          Privacy Policy
        </a>{" "}
        for more
      </CookieConsent>
    </>
  );
};

export default Main;
