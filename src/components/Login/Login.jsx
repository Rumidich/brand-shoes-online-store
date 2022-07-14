import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
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
    <Container maxWidth="sm">
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={"50px"}
        alignItems={"center"}>
        <Typography variant="h5" color={"gold"}>
          Login
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
        />
        <TextField
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
        />
        <Button variant="contained" onClick={handleSave} color={"error"}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
