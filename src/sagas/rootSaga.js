import { takeLatest } from 'redux-saga/effects';
import {
  handleGetUser,
  handleGetUserDetail,
  handleUserCreate,
  handleUserEdit,
  handleGetUserDelete,
} from './handlers/user';
import signout from './handlers/signout';
import {
  GET_USER,
  DO_SIGN_OUT,
  REQUEST_USER_DETAIL,
  REQUEST_USER_CREATE,
  REQUEST_USER_EDIT,
  REQUEST_USER_DELETE,
} from '../store/auth';

export default function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(DO_SIGN_OUT, signout);
  yield takeLatest(REQUEST_USER_DETAIL, handleGetUserDetail);
  yield takeLatest(REQUEST_USER_CREATE, handleUserCreate);
  yield takeLatest(REQUEST_USER_EDIT, handleUserEdit);
  yield takeLatest(REQUEST_USER_DELETE, handleGetUserDelete);
}
