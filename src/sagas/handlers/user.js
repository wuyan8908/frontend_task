import { call, put } from 'redux-saga/effects';
import {
  requestGetUsers,
  requestGetUserDetail,
  requestUserCreate,
  requestUserEdit,
  requestUserDelete,
} from '../requests/user';
import { setUser, setUserDetail } from '../../store/auth';

import history from '../../history';

export function* handleGetUser(action) {
  try {
    const res = yield call(requestGetUsers, action.token);
    const data = res.data.users;
    yield put(setUser(data));
  } catch {
    // eslint-disable-next-line no-console
    console.error();
  }
}

export function* handleGetUserDetail(action) {
  try {
    const res = yield call(requestGetUserDetail, action.id, action.token);
    const { data } = res;
    yield put(setUserDetail(data));
  } catch {
    // eslint-disable-next-line no-console
    console.error();
  }
}

export function* handleUserCreate(action) {
  try {
    yield call(requestUserCreate, action.data, action.token);
    history.push('/users');
  } catch {
    // eslint-disable-next-line no-console
    console.error();
  }
}

export function* handleUserEdit(action) {
  try {
    yield call(requestUserEdit, action.id, action.data, action.token);
    history.push('/users');
  } catch {
    // eslint-disable-next-line no-console
    console.error();
  }
}

export function* handleGetUserDelete(action) {
  try {
    yield call(requestUserDelete, action.id, action.token);
    history.push('/users');
  } catch {
    // eslint-disable-next-line no-console
    console.error();
  }
}
