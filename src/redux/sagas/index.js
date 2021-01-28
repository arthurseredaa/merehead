import { takeEvery } from "redux-saga/effects";
import { USER, USERS } from "../types/index";
import {getUsers} from "./getUsers";
import {deleteUser} from "./deleteUser";
import {createUser} from "./createUser";
import {editUser} from "./editUser";

export function* rootSaga() {
  yield takeEvery(USERS.GET, getUsers);
  yield takeEvery(USER.DELETE, deleteUser);
  yield takeEvery(USER.POST, createUser);
  yield takeEvery(USER.PUT, editUser);
}
