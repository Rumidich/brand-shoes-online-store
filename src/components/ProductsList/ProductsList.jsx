import { Box, Container, ImageList } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  // const { getImage, images } = useContext(imagesContext);
  const { getProducts, products, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);
  // console.log(images);
  return (
    // <Container>
    <div>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        // justifyContent={"center"}
        flexDirection={"row"}
        marginTop={"200px"}
        marginLeft={"90px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pages}
          variant="outlined"
          color="secondary"
        />
      </Box>
    </div>
    // </Container>
  );
};

export default ProductsList;
