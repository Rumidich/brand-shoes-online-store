import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const API = "https://morning-depths-08273.herokuapp.com";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/products/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function getCategories() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/category/`, config);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }
  //! Create
  async function addProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      console.log(res);
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  //! Delete
  async function deleteProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  //! Details, Get One Product to Edit
  async function getOneProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/products/${id}`, config);
      console.log(res);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //! Update

  async function updateProduct(id, editedProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}/products/${id}/`,
        editedProduct,
        config
      );
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  //! likes functionality
  async function toggleLike(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/products/${id}/toggle_like/`, config);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  //! Add to favorites functionality

  async function toggleFavorites(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/products/${id}/toggle_favorites/`,
        config
      );
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        oneProduct: state.oneProduct,
        getProducts,
        getCategories,
        addProduct,
        deleteProduct,
        getOneProduct,
        updateProduct,
        toggleLike,
        toggleFavorites,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
