import { call, put} from 'redux-saga/effects';
import { requestSignout } from '../requests/signout';
import { signOut } from '../../store/auth'

export function* handleSignout(action) {
    try{
        yield call(requestSignout);
        yield put(signOut());
  
    }
    catch{
        console.error();
    }
}