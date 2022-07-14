import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";
import "antd/dist/antd.css";
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
