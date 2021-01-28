import { put, call } from "redux-saga/effects";
import { usersApi } from "../../api";
import { hideLoader, showLoader } from "../actions";
import { USERS } from "../types/index";

// DELETE
export function* deleteUser({ id }) {
  yield put(showLoader());
  const payload = yield call(deleteHandler, id);
  yield put({ type: USERS.SET, payload });
  yield put(hideLoader());
}

const deleteHandler = async (id) => {
  let res = await usersApi.delete(id);
  return res;
};
