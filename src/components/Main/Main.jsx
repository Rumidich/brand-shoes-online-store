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

    // <div class="body-content">
    //   <div class="two-picture-division">
    //     <a href="#"><img src="https://images.ctfassets.net/q602vtcuu3w3/7rnjSHqBEcgbtJ2pZqZarm/c32a5cbe533a8aab72aee54689ddb7e3/190617-WK3-WGW-4-Update.jpg"></a>
    //     <a href="#"><img src="https://images.ctfassets.net/q602vtcuu3w3/6vo26Ry1p3rcvSURCYBoJH/2fdc52ccb0ee69352d8e02ff905d592a/190603-WK1-LGW-1.jpg"></a>
    //   </div>

    //   <div class="three-div">
    //     <a href="#">
    //     <img src="https://images.ctfassets.net/q602vtcuu3w3/7btvNrhUWJrd5UWYSRHtJr/43f9ce8f23d39c839f9b0e34991d97cc/190603-WK1-MGW-5.jpg">
    //   </a>
    //     <a href="#">
    //     <img src="https://images.ctfassets.net/q602vtcuu3w3/5674zBs4G9hFqVyg2ceT6y/83fd495152f58a7bd12e64d68e541dcd/190617-WK3-HGW-7.jpg">
    //   </a>
    //     <a href="#">
    //     <img src="https://images.ctfassets.net/q602vtcuu3w3/3Rz4KD78yXurQYIyqx6oyC/be018c5eeecd2df0a81471bb81177d8d/190617-WK3-WGW-7.jpg">
    //   </a>
    //   </div>

    //   <div class="exclusives-title">
    //     <h2>EXCLUSIVES</h2>
    //     <hr/>
    //   </div>

    //   <div class="exclusive">
    //     <a href="#">
    //     <img src="https://s7d5.scene7.com/is/image/UrbanOutfitters/46953022_086_b?$medium$&qlt=80&fit=constrain">
    //       <p class="picture-description">Champion Cropped Hoodie Sweatshirt</p>
    //   </a>
    //     <a href="#">
    //     <img src="https://s7d5.scene7.com/is/image/UrbanOutfitters/50534346_034_b?$medium$&qlt=80&fit=constrain">
    //       <p class="picture-description">FILA Disruptor 2 Sock Mesh Sneaker</p>
    //   </a>
    //     <a href="#">
    //     <img src="https://s7d5.scene7.com/is/image/UrbanOutfitters/51077311_070_b?$medium$&qlt=80&fit=constrain">
    //       <p class="picture-description">Mia Colona Coin Pendant Necklace</p>
    //   </a>
    //     <a href="#">
    //     <img src="https://s7d5.scene7.com/is/image/UrbanOutfitters/51357671_001_b?$medium$&qlt=80&fit=constrain">
    //       <p class="picture-description">Champion Sports Trim Bike Short</p>
    //   </a>
    //     <a href="#">
    //     <img src="https://s7d5.scene7.com/is/image/UrbanOutfitters/51272904_074_b?$medium$&qlt=80&fit=constrain">
    //       <p class="picture-description">Champion Hood Logo Hoodie Sweatshirt</p>
    //   </a>
    //   </div>
    // </div>    // <>
    //     // <Container style={{ marginTop: "100px" }}>
    //     //   <Box>
    //     //     <Typography>Main Page</Typography>
    //     //   </Box>
    //     // </Container>
    //     // </>
  );
};

export default Main;
