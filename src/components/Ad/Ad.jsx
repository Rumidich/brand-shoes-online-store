import React from "react";
import "../Ad/ad.css";

const Ad = () => {
  return (
    <main>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
              <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"></div>
              <marquee
                class="news-scroll"
                behavior="scroll"
                direction="left"
                onmouseover="this.stop();"
                onmouseout="this.start();">
                <a href="#">🥇 Top 1 in Bishkek </a>
                <span class="dot"></span>
                <a href="#">Subscribe to our newsletter to stay up to date! </a>
                <span class="dot"></span>
                <a href="#">Just one click to order </a>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ad;
