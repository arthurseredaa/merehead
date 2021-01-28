import { USERS } from "../types";

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case USERS.SET:
      return [
          ...action.payload
      ]
    default:
      return state;
  }
}
