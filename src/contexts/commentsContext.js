import React, { useContext, useReducer } from "react";
import axios from "axios";
import { productsContext } from "./productsContext";

export const commentsContext = React.createContext();

const INIT_STATE = {
  comments: [],
  oneComment: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };
    case "GET_ONE_COMMENT":
      return { ...state, oneComment: action.payload };
    default:
      return state;
  }
}

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // const { getOneProduct } = useContext(productsContext);

  //! CRUD
  const COMMENTS_API = "http://localhost:8008/comments";

  //! Create
  async function addComment(newComment) {
    const res = await axios.post(COMMENTS_API, newComment);
    console.log(res);
    // getOneProduct(productId);
  }

  //? with the Back-end (if no problem with heroku)
  // async function addComment(comment, productId) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //config
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios.post(`${API}/comments/`, comment, config);
  //     console.log(res);
  //     getOneProduct(productId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  //! Read
  async function getComments() {
    const res = await axios(COMMENTS_API);
    dispatch({
      type: "GET_COMMENTS",
      payload: res.data,
    });
  }

  //! Delete
  async function deleteComment(id) {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComments();
  }

  //? with the Back-end (if no problem with heroku)
  // async function deleteComment(reviewId, productId) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //config
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     await axios.delete(`${API}/comments/${reviewId}/`, config);
  //     getOneProduct(productId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  //! Details, Get to edit
  async function getOneComment(id) {
    const res = await axios(`${COMMENTS_API}/${id}`);
    dispatch({
      type: "GET_ONE_COMMENT",
      payload: res.data,
    });
  }

  //! Update
  async function updateComment(id, updatedComment) {
    await axios.patch(`${COMMENTS_API}/${id}`, updatedComment);
    getComments();
  }

  return (
    <commentsContext.Provider
      value={{
        comments: state.comments,
        oneComment: state.oneComment,
        addComment,
        getComments,
        deleteComment,
        getOneComment,
        updateComment,
      }}>
      {children}
    </commentsContext.Provider>
  );
};
export default CommentsContextProvider;

