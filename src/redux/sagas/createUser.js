import { put, call } from "redux-saga/effects";
import { usersApi } from "../../api";
import { hideLoader, showLoader } from "../actions";
import { USERS } from "../types/index";

// POST
export function* createUser({ data }) {
  yield put(showLoader());
  const payload = yield call(createHandler, data);
  console.log(payload)
  if(payload.error) {
    console.log("error")
  }
  yield put({ type: USERS.GET });
  yield put(hideLoader());
}

const createHandler = async (data) => {
  let res = await usersApi.post(data);
  return res;
};
