import { Image } from "antd";
import React from "react";

const Main = () => {
  return (
    <div>
      <div style={{ zIndex: "1", position: "relative" }}>
        <span
          style={{
            fontSize: "300px",
            display: "flex",
            justifyContent: "flex-end",
            color: "transparent",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          }}>
          Shop
        </span>
      </div>
      <div style={{ zIndex: "0", position: "absolute", top: "7vh" }}>
        <Image
          preview={false}
          width="80vw"
          height="80vh"
          src="https://media3.s-nbcnews.com/i/newscms/2019_08/1411412/img01_6c31e11c1b424dfc2a1c12366f577cb6.jpg"
        />
      </div>
    </div>
  );
};

export default Main;
