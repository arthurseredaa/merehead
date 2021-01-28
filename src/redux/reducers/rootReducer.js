import { combineReducers } from "redux";
import { appReducer } from "./app";
import {usersReducer} from "./users";

export const rootReducer = combineReducers({
  users: usersReducer,
  app: appReducer
})
