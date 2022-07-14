import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SuccessfullRegister = () => {
  return (
    <div>
      <Typography>
        You have successfully registered <Link to="/login">You can enter </Link>{" "}
        into your account
      </Typography>
    </div>
  );
};

export default SuccessfullRegister;
