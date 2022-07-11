import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  comments: [],
  oneComment: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        comments: action.payload,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "GET_ONE_COMMENT":
      return { ...state, oneComment: action.payload };
    default:
      return state;
  }
}

const PRODUCTS_API = " http://localhost:8001/products";
const COMMENTS_API = "http://localhost:8001/comments";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! Create

  async function addProduct(newProduct) {
    await axios.post(PRODUCTS_API, newProduct);
  }

  async function addComment(newComment) {
    await axios.post(COMMENTS_API, newComment);
  }

  //! Read

  async function getProducts() {
    const res = await axios(`${PRODUCTS_API}/${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  }

  async function getComments() {
    const res = await axios(COMMENTS_API);
    dispatch({
      type: "GET_COMMENTS",
      payload: res.data,
    });
  }

  //! Delete
  async function deleteProduct(id) {
    await axios.delete(`${PRODUCTS_API}/${id}`);
    getProducts();
  }

  async function deleteComment(id) {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComments();
  }

  //! Details, Get One Product to Edit
  async function getOneProduct(id) {
    const res = await axios(`${PRODUCTS_API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: res.data,
    });
  }

  //! Get one Comment to Edit
  async function getOneComment(id) {
    const res = await axios(`${COMMENTS_API}/${id}`);
    dispatch({
      type: "GET_ONE_COMMENT",
      payload: res.data,
    });
  }

  //! Update
  async function updateProduct(id, updatedProduct) {
    await axios.patch(`${PRODUCTS_API}/${id}`, updatedProduct);
  }

  async function updateComment(id, updatedComment) {
    await axios.patch(`${COMMENTS_API}/${id}`, updatedComment);
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        oneComment: state.oneComment,
        pages: state.pages,
        addProduct,
        addComment,
        getProducts,
        getComments,
        deleteProduct,
        deleteComment,
        getOneProduct,
        getOneComment,
        updateProduct,
        updateComment,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
