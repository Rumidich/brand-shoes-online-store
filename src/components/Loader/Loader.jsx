import React from "react";
import "../Loader/loader.css";

const Loader = () => {
  return (
    <>
      <div id="body">
        <div className="circle">
          <div className="circle first"></div>
          <div className="circle two"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
