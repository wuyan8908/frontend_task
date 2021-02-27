import { takeLatest} from "redux-saga/effects";
//import { SET_TOKEN } from "../store/auth"
import {handleGetUser} from '../sagas/handlers/user'
import {handleSignout} from '../sagas/handlers/signout'
import {GET_USER} from '../store/auth'
import {DO_SIGN_OUT} from '../store/auth'


export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(DO_SIGN_OUT, handleSignout);
}