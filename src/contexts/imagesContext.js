import React, { useReducer } from "react";
import axios from "axios";

export const imagesContext = React.createContext();

const INIT_STATE = {
  images: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_IMAGES":
      return {
        ...state,
        images: action.payload.data,
      };
  }
}

const ImagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! CRUD
  const IMAGES_API = "http://localhost:8008/images";

  //! Read - Get Images
  async function getImages() {
    const res = await axios(IMAGES_API);
    dispatch({
      type: "GET_IMAGES",
      payload: res.data,
    });
  }

  //? with the Back-end (if no problem with heroku)
  //  async function getImage() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     //configuration
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/image/`, config);
  //     // console.log(res);
  //     dispatch({
  //       type: "GET_IMAGE",
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <imagesContext.Provider
      value={{
        images: state.images,
        getImages,
      }}>
      {children}
    </imagesContext.Provider>
  );
};
export default ImagesContextProvider;
