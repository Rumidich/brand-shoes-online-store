import React from "react";
import { useNavigate } from "react-router-dom";
import ".././../App.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div
          style={{
            backgroundColor: "rgb(238, 238, 238)",
            marginTop: "46px",
            color: "black",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h5 style={{ margin: "5px", fontWeight: "500" }}>Men</h5>{" "}
          <h5 style={{ margin: "5px", fontWeight: "500" }}>New&Featured</h5>
          <h5 style={{ margin: "5px", fontWeight: "500" }}>Women</h5>
        </div>
        <div id="innerpage">
          <div className="innerpage">
            <div className="col">
              <h1 className="h1">BrandShoes</h1>
              <p>
                Some info Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Optio molestias, corrupti maxime ratione assumenda quidem
                voluptatibus, quibusdam neque laudantium, praesentium aut illum
                veritatis numquam fugit? Quae reiciendis nostrum deleniti
                aliquam?
              </p>
              <button
                onClick={() => navigate("/products")}
                className="button"
                type="button">
                Shop
              </button>
            </div>
            <div className="column">
              <div className="card card1">{/* <h5>Nike Some</h5> */}</div>
              <div className="card card2">{/* <h5>Nike Some</h5> */}</div>
              <div className="card card3">{/* <h5>Nike some</h5> */}</div>
              {/* <div className="card card4">
                <h5>Nike some</h5>
              </div> */}
            </div>
          </div>
        </div>
      </>
      <>
        <main className="flex" style={{ display: "flex" }}>
          <article className="landing-page">
            <div className="darkener">
              <div className="wrapper flex-column">
                <p className="top-logo">Nike Some</p>
                <h1 className="landing-page-title">
                  <strong></strong>
                </h1>
                <h2 className="page-subtitle">catalog</h2>
              </div>
            </div>
          </article>
          <article className="landing-page2">
            <div className="darkener2">
              <div className="wrapper2 flex-column2">
                <p className="top-logo">Adidas Some</p>
                <h1 className="landing-page-title">
                  <strong></strong>
                </h1>
                <h2 className="page-subtitle">catalog</h2>
              </div>
            </div>
          </article>
        </main>
      </>
    </>
  );
};

export default Main;
