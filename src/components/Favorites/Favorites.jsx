import { Box, Container, Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import FavoritesCard from "../FavoritesCard/FavoritesCard";
import { useSearchParams } from "react-router-dom";

const Favorites = () => {
  const { getFavorites, favorites, favoritesPages } =
    useContext(productsContext);

  useEffect(() => {
    getFavorites();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getFavorites();
  }, [searchParams]);

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          color={"gold"}
          textAlign="center"
          marginTop={"80px"}>
          Favorites
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        flexDirection={"row"}
        marginTop={"20px"}
        alignItems={"start"}>
        {favorites.map(item => (
          <FavoritesCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={favoritesPages}
          variant="outlined"
          color="success"
        />
      </Box>
    </Container>
  );
};

export default Favorites;
