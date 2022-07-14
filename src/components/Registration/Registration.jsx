import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";

const Registration = () => {
  const { handleRegistration, error, loading, setError } =
    useContext(authContext);
  // console.log(loading);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (!name || !email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Please complete all the fields");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegistration(formData, navigate);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="sm">
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={"50px"}
        alignItems={"center"}>
        <Typography variant="h5">Register</Typography>
        {error ? (
          <Box>
            {error.map((item, index) => (
              <Alert severity="error" key={item + index}>
                {" "}
                {item}
              </Alert>
            ))}
          </Box>
        ) : null}
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
        <TextField
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          variant="outlined"
          label="Password confirmation"
        />
        <Button onClick={handleSave} variant="contained" color="warning">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Registration;
