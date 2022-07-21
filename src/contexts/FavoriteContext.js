import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const favoriteContext = createContext();

const INIT_STATE = {
  fav: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAV":
      return {
        ...state,
        fav: action.payload,
      };
    default:
      return state;
  }
}
const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! Create - Add to Fav (favorites)
  function addToFav(shoe) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
      };
    }
    let newShoe = {
      item: shoe,
    };
    const isShoeInFav = fav.shoes.some(
      item => item.item.id === newShoe.item.id
    );

    if (isShoeInFav) {
      fav.shoes = fav.shoes.filter(item => item.item.id !== newShoe.item.id);
    } else {
      fav.shoes.push(newShoe);
    }
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }

  //! Read - Get Fav (favorites)
  function getFav() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
      };
    }
    dispatch({
      type: "GET_FAV",
      payload: fav,
    });
  }

  //! Delete -  remove from Fav (favorites)
  function deleteFromFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
      };
    }
    fav.shoes = fav.shoes.filter(item => item.item.id !== id);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  }

  function checkShoeInFav(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        shoes: [],
      };
    }
    const isShoeInFav = fav.shoes.some(item => item.item.id === id);
    return isShoeInFav;
  }

  return (
    <favoriteContext.Provider
      value={{
        fav: state.fav,
        count: state.count,
        getFav,
        addToFav,
        deleteFromFav,
        checkShoeInFav,
      }}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
