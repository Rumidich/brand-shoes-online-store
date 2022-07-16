import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
import Main from "./components/Main/Main";
import CartContextProvider from "./contexts/cartContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Navbar />
            {/* <Cardimage /> */}
            <Main />
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
