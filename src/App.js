import React from "react";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
    </ProductsContextProvider>
  );
};

export default App;
