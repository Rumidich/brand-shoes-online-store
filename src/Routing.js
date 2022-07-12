import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Main from "./components/Main/Main";
import ProductsDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/store" element={<ProductsList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<ProductsDetails />} />
    </Routes>
  );
};

export default Routing;
