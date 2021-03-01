import { call, put } from 'redux-saga/effects';
import signout from '../requests/signout';
import { signOut } from '../../store/auth';

export default function* handleSignout() {
  try {
    yield call(signout);
    yield put(signOut());
  } catch {
    // eslint-disable-next-line no-console
    console.error();
  }
}
