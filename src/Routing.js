import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import ProductsList from "./components/ProductsList/ProductsList";
import Registration from "./components/Registration/Registration";
import SuccessfullRegister from "./components/SuccessfullRegister/SuccessfullRegister";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { loading, currentUser } = useContext(authContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/products" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={
          currentUser ? <Navigate to="/products" replace /> : <Registration />
        }
      />
      <Route
        path="/register-success"
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
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default Routing;
