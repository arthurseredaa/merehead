import { put, call } from "redux-saga/effects";
import { usersApi } from "../../api";
import { hideLoader, showLoader } from "../actions";
import { USERS } from "../types/index";

// PUT
export function* editUser({ id, data }) {
  yield put(showLoader());
  yield call(editHandler, id, data);
  yield put({ type: USERS.GET });
  yield put(hideLoader());
}

const editHandler = async (id, data) => {
  await usersApi.put(id, data);
};
