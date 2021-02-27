import { call, put} from 'redux-saga/effects';
import { requestGetUsers } from '../requests/user';
import { setUser } from '../../store/auth'

export function* handleGetUser(action) {
    try{
        const res = yield call(requestGetUsers, action.token);
        const data = res.data.users;
        //console.log(data);
        yield put(setUser(data));
    }
    catch{
        console.error();
    }
}