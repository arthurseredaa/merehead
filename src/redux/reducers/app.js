import { LOADER } from "../types/index";

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER.SHOW:
      return {
        ...state,
        loading: true,
      };
    case LOADER.HIDE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
