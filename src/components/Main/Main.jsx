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
        <main class="flex" style={{ display: "flex" }}>
          <article class="landing-page">
            <div class="darkener">
              <div class="wrapper flex-column">
                <p class="top-logo">Nike Some</p>
                <h1 class="landing-page-title">
                  <strong></strong>
                </h1>
                <h2 class="page-subtitle">catalog</h2>
              </div>
            </div>
          </article>
          <article class="landing-page2">
            <div class="darkener2">
              <div class="wrapper2 flex-column2">
                <p class="top-logo">Adidas Some</p>
                <h1 class="landing-page-title">
                  <strong></strong>
                </h1>
                <h2 class="page-subtitle">catalog</h2>
              </div>
            </div>
          </article>
        </main>
      </>
    </>
    <Container style={{ marginTop: "100px" }}>
      <Box>
        <Typography>Main Page</Typography>
      </Box>
    </Container>
  );
};

export default Main;
