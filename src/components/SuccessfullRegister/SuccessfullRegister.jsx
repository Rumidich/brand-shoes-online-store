import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const SuccessfullRegister = () => {
  return (
    <Container>
      <Box>
        <Typography>
          You have successfully registered
          <Link to="/login">You can enter </Link> into your account
        </Typography>
      </Box>
    </Container>
  );
};

export default SuccessfullRegister;
