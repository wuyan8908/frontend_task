import { call, put} from 'redux-saga/effects';
import { requestGetUsers,requestGetUserDetail,requestUserCreate, requestUserEdit, requestUserDelete } from '../requests/user';
import { setUser} from '../../store/auth'
import {setUserDetail } from '../../store/auth'
import history from '../../history';

export function* handleGetUser(action) {
    try{
        const res = yield call(requestGetUsers, action.token);
        const data = res.data.users;
        yield put(setUser(data));
    }
    catch{
        console.error();
    }
}

export function* handleGetUserDetail(action) {
    try{
        const res = yield call(requestGetUserDetail,action.id,action.token);
        const data = res.data;
        yield put(setUserDetail(data));
    }
    catch{
        console.error();
    }
}

export function* handleUserCreate(action) {
    try{
        yield call(requestUserCreate,action.data,action.token);
        history.push('/users')
    }
    catch{
        console.error();
    }
}

export function* handleUserEdit(action) {
    try{
        const res = yield call(requestUserEdit,action.id,action.data,action.token);
        const data = res.data;
        console.log('fpush',data);
        history.push('/users');
    }
    catch{
        console.error();
    }
}

export function* handleGetUserDelete(action) {
    try{
        const res = yield call(requestUserDelete,action.id,action.token);
        const data = res.data;
        console.log('fdelete',data);
        history.push('/users');
    }
    catch{
        console.error();
    }
}
