import { Box, Container, Slider, TextField, Typography } from "@mui/material";
import "../ProductsList/forcards.css";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { getProducts, products, pages, getLikes } =
    useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = useState(1);

  const [price, setPrice] = useState([1, 20000]);

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
      q: search,
      page: currentPage,
      price_from: price[0],
      price_to: price[1],
    });
  }, [search, currentPage, price]);
  console.log(products);
  return (
    <div>
      <Container>
        <Box
          component="form"
          id="search"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
            display: "flex",
            flexDirection: "row",
            marginTop: "80px",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          noValidate
          autoComplete="off">
          <TextField
            style={{ width: "400px" }}
            value={search}
            color="secondary"
            onChange={e => setSearch(e.target.value)}
            label="I am Looking for..."
            variant="outlined"
            margin="normal"
          />
          <Box
            sx={{
              marginTop: "40px",
              width: "200px",
              justifyContent: "center",
            }}>
            <Typography>Filter by Price</Typography>
            <Slider
              id="slider"
              getAriaLabel={() => "Temperature range"}
              color="success"
              size="medium"
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
        </Box>

        <Box
          className="forcards"
          display={"flex"}
          flexWrap={"wrap"}
          // justifyContent={"center"}
          flexDirection={"row"}
          marginTop={"50px"}
          // marginLeft={"90px"}
        >
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
    </div>
  );
};

export default ProductsList;
