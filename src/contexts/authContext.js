import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

const API = "https://morning-depths-08273.herokuapp.com";

const AuthContextProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegistration(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/registration/`, formData);
      // console.log(res);
      navigate("/successfull-registration");
    } catch (err) {
      setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email, navigate) {
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/products");
      console.log(res);
    } catch (err) {
      console.log(err);
      setError([err.response.data.detail]);
    }
  }

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/account/refresh/`,
        {
          refresh: tokens.refresh,
        },
        config
      );
      // console.log(res);
      const updatedTokens = {
        access: res.data.access,
        refresh: tokens.refresh,
      };
      localStorage.setItem("tokens", JSON.stringify(updatedTokens));
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (err) {
      // console.log(err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  function handleLogout(navigate) {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
    navigate("/login");
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        setError,
        handleRegistration,
        handleLogin,
        checkAuth,
        handleLogout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
