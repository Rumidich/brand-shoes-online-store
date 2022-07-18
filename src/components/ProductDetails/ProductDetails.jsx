import { Container, Typography } from "@mui/material";
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
    <Container>
      <Typography variant="h5">Title: {oneProduct.title}</Typography>
      <Typography variant="h5">Price: {oneProduct.price}</Typography>
      <Typography variant="h5">
        Description: {oneProduct.description}
      </Typography>
      <Typography variant="h5">Author: {oneProduct.author}</Typography>
      <Typography variant="h5">
        Category: {oneProduct.category.title}
      </Typography>
      <img width="300px" src={oneProduct.image} alt="product" />
      <Comments comments={oneProduct.comments} />
    </Container>
  );
};

export default ProductsDetails;
