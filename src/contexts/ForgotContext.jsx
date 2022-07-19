import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const forgotContext = createContext();

const API = "https://morning-depths-08273.herokuapp.com";

const ForgotContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleForgot(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(
        `${API}/account/restore_password/`,
        formData
      );
      console.log(res);
      navigate("/successfull-registration");
    } catch (err) {
      setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  return (
    <forgotContext.Provider value={{ handleForgot }}>
      {children}
    </forgotContext.Provider>
  );
};

export default ForgotContextProvider;
