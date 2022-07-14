import { Alert, Button, Input, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

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
  console.log(error);

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        marginLeft: "300px",
        marginRight: "300px",
      }}>
      <Typography>Login</Typography>
      {error ? <Alert>{error}</Alert> : null}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button onClick={handleSave}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
