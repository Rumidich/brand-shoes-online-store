import React, { useReducer } from "react";

export const favoritesContext = React.createContext();

const INIT_STATE = {
  favorites: [],
  favoritesPages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
        favoritesPages: action.payload.products.length,
      };
    //? with the Back-end (if no problem with heroku)
    // case "GET_FAVORITES":
    //   return {
    //     ...state,
    //     favorites: action.payload.results,
    //     favoritesPages: Math.ceil(action.payload.count / 5),
    //   };
    default:
      return state;
  }
}

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? with the Back-end (if no problem with heroku)
  // //! Add to favorites functionality

  // async function toggleFavorites(id) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //configuration
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/favorites/`, config);
  //     getProducts();
  //     getFavorites();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function getFavorites() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //config
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(
  //       `${API}/favorites/${window.location.search}`,
  //       config
  //     );
  //     dispatch({
  //       type: "GET_FAVORITES",
  //       payload: res.data,
  //     });
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  //! Create
  // function addToFavorites(id) {
  //   let favorites = JSON.parse(localStorage.getItem("favorites"));
  //   if (!favorites) {
  //     favorites = {
  //       products: [],
  //     };
  //   }
  //   const res = await axios(`${API}/favorites/`, config);
  //       getProducts();
  //       getFavorites();

  async function addToFavorites(id) {
    const res = await axios(`${API}/favorites/`);
    getProducts();
    getFavorites();
  }

  //! Read
  async function getFavorites() {
    const res = await axios(
      `${API}/favorites/${window.location.search}`,
      config
    );
    dispatch({
      type: "GET_FAVORITES",
      payload: res.data,
    });
    console.log(res);
  }

  //! Delete
  function deleteFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    favorites.products = favorites.products.filter(item => item.item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites();
  }

  return (
    <favoritesContext.Provider
      value={{
        favorites: state.favorites,
        favoritesPages: state.favoritesPages,
        addToFavorites,
        getFavorites,
        deleteFromFavorites,
      }}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
