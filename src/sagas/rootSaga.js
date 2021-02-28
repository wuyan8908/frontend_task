import { takeLatest} from "redux-saga/effects";
//import { SET_TOKEN } from "../store/auth"
import {handleGetUser, handleGetUserDetail, handleUserCreate,handleUserEdit,handleGetUserDelete} from '../sagas/handlers/user'
import {handleSignout} from '../sagas/handlers/signout'
import {GET_USER, DO_SIGN_OUT, REQUEST_USER_DETAIL,REQUEST_USER_CREATE,REQUEST_USER_EDIT,REQUEST_USER_DELETE} from '../store/auth'


export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(DO_SIGN_OUT, handleSignout);
  yield takeLatest(REQUEST_USER_DETAIL, handleGetUserDetail);
  yield takeLatest(REQUEST_USER_CREATE, handleUserCreate);
  yield takeLatest(REQUEST_USER_EDIT, handleUserEdit);
  yield takeLatest(REQUEST_USER_DELETE, handleGetUserDelete);
}