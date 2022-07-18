import React, { useReducer } from "react";
import axios from "axios";

export const categoriesContext = React.createContext();

const INIT_STATE = {
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
  }
}
const CATEGORIES_API = "http://localhost:8008/categories";

const CategoriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! Read
  async function getCategories() {
    const res = await axios(CATEGORIES_API);
    console.log(res);
    dispatch({
      type: "GET_CATEGORIES",
      payload: res.data.results,
    });
  }

  //? With the Back-end (if no problem with heroku)

  // //! Read - Get Categories
  // async function getCategories() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //configuration
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/category/`, config);
  //     dispatch({
  //       type: "GET_CATEGORIES",
  //       payload: res.data.results,
  //     });
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <categoriesContext.Provider
      value={{
        categories: state.categories,
        getCategories,
      }}>
      {children}
    </categoriesContext.Provider>
  );
};
export default CategoriesContextProvider;
