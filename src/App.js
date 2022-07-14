import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Navbar />
          <Main />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
