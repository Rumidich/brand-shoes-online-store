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
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const PRODUCTS_API = "http://localhost:8008/products";
const CATEGORIES_API = "http://localhost:8008/categories";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! Read
  //! Read - Get Products
  async function getProducts() {
    // try {
    //   const tokens = JSON.parse(localStorage.getItem("tokens"));
    //   //configuration
    //   const Authorization = `Bearer ${tokens.access}`;
    //   const config = {
    //     headers: {
    //       Authorization,
    //     },
    //   };
    const res = await axios(
      `${PRODUCTS_API}/${window.location.search}`
      // config
    );
    // console.log(res);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  async function getCategories() {
    const res = await axios(CATEGORIES_API);
    console.log(res);
    dispatch({
      type: "GET_CATEGORIES",
      payload: res.data,
    });
  }

  //! Create
  async function addProduct(newProduct, navigate) {
    // try {
    //   const tokens = JSON.parse(localStorage.getItem("tokens"));
    //   //configuration
    //   const Authorization = `Bearer ${tokens.access}`;
    //   const config = {
    //     headers: {
    //       Authorization,
    //     },
    //   };
    const res = await axios.post(PRODUCTS_API, newProduct);
    console.log(res);
    navigate("/products");
    // getProducts();
    // } catch (err) {
    //   console.log(err);
    // }
  }

  //! Delete
  async function deleteProduct(id) {
    // try {
    //   const tokens = JSON.parse(localStorage.getItem("tokens"));
    //   //configuration
    //   const Authorization = `Bearer ${tokens.access}`;
    //   const config = {
    //     headers: {
    //       Authorization,
    //     },
    //   };
    await axios.delete(`${PRODUCTS_API}/${id}`);
    getProducts();
    // } catch (err) {
    //   console.log(err);
    // }
  }

  //! Details, Get One Product to Edit
  async function getOneProduct(id) {
    // try {
    //   const tokens = JSON.parse(localStorage.getItem("tokens"));
    //   //configuration
    //   const Authorization = `Bearer ${tokens.access}`;
    //   const config = {
    //     headers: {
    //       Authorization,
    //     },
    //   };
    const res = await axios(
      `${PRODUCTS_API}/${id}`
      // , config
    );
    console.log(res);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: res.data,
    });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  //! Update

  async function updateProduct(id, editedProduct, navigate) {
    // try {
    //   const tokens = JSON.parse(localStorage.getItem("tokens"));
    //   //configuration
    //   const Authorization = `Bearer ${tokens.access}`;
    //   const config = {
    //     headers: {
    //       Authorization,
    //     },
    //   };
    const res = await axios.patch(
      `${PRODUCTS_API}/${id}/`,
      editedProduct
      // config
    );
    navigate("/products");
    getProducts();
    // } catch (err) {
    //   console.log(err);
    // }
  }

  // async function toggleLike(id) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //configuration
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${PRODUCTS_API}/likes/`, config);
  //     getProducts();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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
        // toggleLike,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
