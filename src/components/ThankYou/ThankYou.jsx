import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "70px",
        marginBottom: "100px",
      }}>
      <Typography variant="h3" style={{ marginTop: "30px", color: "white" }}>
        Dear Customer,
      </Typography>

      <Typography variant="h6" style={{ marginTop: "20px", color: "white" }}>
        Thank You very much for your purchase!
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        Your Order has been placed successfully.
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        We will contact you soon!
      </Typography>
      <Typography variant="h6" style={{ marginTop: "30px", color: "white" }}>
        If you need help or you have a question,
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        please contact us by submitting your message here:
      </Typography>
      <h3 style={{ color: "white" }}>
        <TextField
          id="outlined-basic"
          label="Type your message here"
          variant="outlined"
        />
        <Button
          variant="outlined"
          color="error"
          size="large"
          style={{ marginLeft: "10px" }}
          onClick={() => (
            <Alert label="Thank you for your message! We'll follow-up soon!" />
          )}
          endIcon={<SendIcon />}>
          Send
        </Button>{" "}
      </h3>

      <h3 style={{ marginTop: "20px", color: "white" }}>Sincerely Yours,</h3>
      <h1 style={{ color: "gold" }}>Sneakers Store Online</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
        }}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={() => navigate("/products")}
          endIcon={<SendIcon />}>
          Back to Shop
        </Button>
      </Box>
    </div>
  );
};

export default ThankYou;
