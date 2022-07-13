import { Button, Input, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }
  // console.log(error);

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div
      display={"flex"}
      flexDirection={"column"}
      marginTop={"50px"}
      alignItems={"center"}>
      <Typography variant="h5" color={"gold"}>
        Login
      </Typography>
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        variant="outlined"
        label="Email"
      />
      <Input
        value={password}
        onChange={e => setPassword(e.target.value)}
        variant="outlined"
        label="Password"
      />
      <Input />
      <Button variant="contained" onClick={handleSave} color={"error"}>
        Login
      </Button>
    </div>
  );
};

export default Login;
