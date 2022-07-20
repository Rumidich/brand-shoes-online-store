import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Comments from "../Comments/Comments";
import Loader from "../Loader/Loader";

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct } = useContext(productsContext);

  useEffect(() => {
    getOneProduct(id);
  }, []);
  if (!oneProduct) {
    return <Loader />;
  }
  console.log(oneProduct);

  return (
    <Container sx={{ marginTop: "80px" }}>
      <Typography variant="h6">Title: {oneProduct.title}</Typography>
      <Typography variant="h6">Price: {oneProduct.price}</Typography>
      <Typography variant="h6">
        Description: {oneProduct.description}
      </Typography>
      <Typography variant="h6">Brand: {oneProduct.brand}</Typography>
      <Typography variant="h6">Category: {oneProduct.category}</Typography>
      <img width="250px" src={oneProduct.image} alt="product" />
      <Comments comments={oneProduct.comments} />
      <Button marginTop="20px" onClick={() => navigate("/products")}>
        Back to Shop
      </Button>
    </Container>
  );
};

export default ProductsDetails;
