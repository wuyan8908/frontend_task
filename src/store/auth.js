// import _ from 'lodash';

export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';
export const DO_SIGN_OUT = 'DO_SIGN_OUT';
export const REQUEST_USER_DETAIL = 'REQUEST_USER_DETAIL';
export const SET_USER_DETAIL = 'SET_USER_DETAIL';
export const REQUEST_USER_CREATE = 'REQUEST_USER_CREATE';
export const REQUEST_USER_EDIT = 'REQUEST_USER_EDIT';
export const REQUEST_USER_DELETE = 'REQUEST_USER_DELETE';

export const requestUser = (token) => ({
  type: GET_USER,
  token,
});

export const requestUserDetail = (id, token) => ({
  type: REQUEST_USER_DETAIL,
  id,
  token,
});

export const requestUserCreate = (data, token) => ({
  type: REQUEST_USER_CREATE,
  data,
  token,
});

export const requestUserEdit = (id, data, token) => ({
  type: REQUEST_USER_EDIT,
  id,
  data,
  token,
});

export const requestUserDelete = (id, token) => ({
  type: REQUEST_USER_DELETE,
  id,
  token,
});

export const setUserDetail = (userDetail) => ({
  type: SET_USER_DETAIL,
  userDetail,
});

export const setUser = (users) => {
  return {
    type: SET_USER,
    payload: users,
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
    isSignedIn: true,
  };
};

export const DoSignOut = () => {
  return {
    type: DO_SIGN_OUT,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

const INITIALSTATE = {
  userList: null,
  token: null,
  isSignedIn: false,
  userDetail: null,
};

// eslint-disable-next-line default-param-last
export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userList: action.payload };
    // return { ...state, ..._.mapKeys(action.payload, 'id') };
    case SET_TOKEN:
      return { ...state, token: action.token, isSignedIn: action.isSignedIn };
    case SIGN_OUT:
      return { ...state, token: null, isSignedIn: false };
    case SET_USER_DETAIL:
      return { ...state, userDetail: action.userDetail };
    default:
      return state;
  }
};
