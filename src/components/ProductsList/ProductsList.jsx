import { Box, Container, ImageList, Slider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([1, 20000]);

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 6,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  console.log(products);

  return (
    <Container>
      <Box sx={{ marginTop: "40px", justifyContent: "center" }}>
        <Slider
          id="slider"
          getAriaLabel={() => "Temperature range"}
          color="warning"
          value={price}
          onChange={(e, value) => {
            setPrice(value);
          }}
          valueLabelDisplay="auto"
          min={0}
          max={20000}
          step={1000}
        />
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        flexDirection={"row"}
        marginTop={"40px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          className="pagination"
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pages}
          variant="outlined"
          color="warning"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
