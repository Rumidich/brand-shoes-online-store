import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/cartContext";
import Footer from "./components/Footer/Footer";
import ForgotContextProvider from "./contexts/ForgotContext";
import FavContextProvider from "./contexts/FavoriteContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ForgotContextProvider>
        <ProductsContextProvider>
          <FavContextProvider>
            <CartContextProvider>
              <BrowserRouter>
                <Navbar />
                <Routing />
                <Footer />
              </BrowserRouter>
            </CartContextProvider>
          </FavContextProvider>
        </ProductsContextProvider>
      </ForgotContextProvider>
    </AuthContextProvider>
  );
};

export default App;
