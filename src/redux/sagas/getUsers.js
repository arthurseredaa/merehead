import { put, call } from "redux-saga/effects";
import { usersApi } from "../../api";
import { hideLoader, showLoader } from "../actions";
import { USERS } from "../types/index";

// GET
export function* getUsers() {
  yield put(showLoader());
  const payload = yield call(getHandler);
  yield put({ type: USERS.SET, payload });
  yield put(hideLoader());
}

const getHandler = async () => {
  let payload = await usersApi.get();
  return payload;
};
