import React from "react";
import TelegramChat from "../TelegramChat/TelegramChat";
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
          <h5 style={{ margin: "5px", fontWeight: "500" }}>New&Featured</h5>
          <h5 style={{ margin: "5px", fontWeight: "500" }}>Men</h5>{" "}
          <h5 style={{ margin: "5px", fontWeight: "500" }}>Women</h5>
        </div>
        <div id="innerpage">
          <div className="innerpage">
            <div className="col">
              <h1
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
            <div onClick={() => navigate("/products")} className="card card1">
              {/* <h5>Nike Some</h5> */}
            </div>
            <div onClick={() => navigate("/products")} className="card card2">
              {/* <h5>Nike Some</h5> */}
            </div>
            <div onClick={() => navigate("/products")} className="card card3">
              {/* <h5>Nike some</h5> */}
            </div>
            {/* <div className="card card4">
                <h5>Nike some</h5>
              </div> */}
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
          <TelegramChat />
        </main>
      </>
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
              onClick={() => navigate("/products")}
              style={{ width: "300px", height: "300px", marginLeft: "100px" }}
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
    </>

    // <>
    // <Container style={{ marginTop: "100px" }}>
    //   <Box>
    //     <Typography>Main Page</Typography>
    //   </Box>
    // </Container>
    // </>
  );
};

export default Main;
