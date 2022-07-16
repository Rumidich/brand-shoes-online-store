import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Favorites from "./components/Favorites/Favorites";
import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import ProductsDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import Registration from "./components/Registration/Registration";
import SuccessfullRegister from "./components/SuccessfullRegister/SuccessfullRegister";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { loading, currentUser } = useContext(authContext);
  if (loading) {
    return <Loader />;
  }
  // console.log(currentUser);

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        Main
      </Route>
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/products" replace /> : <Login />}
      />
      <Route
        path="/registration"
        element={
          currentUser ? <Navigate to="/products" replace /> : <Registration />
        }
      />
      <Route
        path="/successfull-registration"
        element={
          currentUser ? (
            <Navigate to="/products" replace />
          ) : (
            <SuccessfullRegister />
          )
        }
      />
      <Route
        path="/products"
        element={
          currentUser ? <ProductsList /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/add"
        element={
          currentUser ? <AddProduct /> : <Navigate to="/login" replace />
        }
      />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/products/:id" element={<ProductsDetails />} />
    </Routes>
  );
};

export default Routing;
