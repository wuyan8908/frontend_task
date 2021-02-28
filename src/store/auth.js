//import _ from 'lodash';


export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const DO_SIGN_OUT = "DO_SIGN_OUT";
export const REQUEST_USER_DETAIL = "REQUEST_USER_DETAIL";
export const SET_USER_DETAIL = "SET_USER_DETAIL";
export const REQUEST_USER_CREATE = "REQUEST_USER_CREATE";
export const REQUEST_USER_EDIT = "REQUEST_USER_EDIT";
export const REQUEST_USER_DELETE = "REQUEST_USER_DELETE";


export const requestUser = (token) => ({
  type: GET_USER,
  token : token
});

export const requestUserDetail = (id,token) => ({
  type: REQUEST_USER_DETAIL,
  id : id,
  token : token
});

export const requestUserCreate = (data,token) => ({
  type: REQUEST_USER_CREATE,
  data : data,
  token : token
});

export const requestUserEdit = (id,data,token) => ({
  type: REQUEST_USER_EDIT,
  id: id,
  data : data,
  token : token
});

export const requestUserDelete = (id,token) => ({
  type: REQUEST_USER_DELETE,
  id : id,
  token : token
});

export const setUserDetail = userDetail => ({
  type: SET_USER_DETAIL,
  userDetail : userDetail
});

export const setUser = users => {
  return {
    type: SET_USER,
    payload: users
  };
};

export const setToken = token => {
  return {
    type: SET_TOKEN,
    token: token,
    isSignedIn: true
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

 const initialState = {
  userList: null,
  token: null,
  isSignedIn: false,
  userDetail:null
 };

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_USER:
        return { ...state, userList: action.payload};
        //return { ...state, ..._.mapKeys(action.payload, 'id') };
        case SET_TOKEN:
          return { ...state, token: action.token, isSignedIn:action.isSignedIn};
        case SIGN_OUT:
          return { ...state, token: null, isSignedIn:false};
        case SET_USER_DETAIL:
          return { ...state, userDetail : action.userDetail};
      default:
        return state;
    }
  };


  
     //   case FETCH_STREAM:
    //     return { ...state, [action.payload.id]: action.payload };
    //   case CREATE_STREAM:
    //     return { ...state, [action.payload.id]: action.payload };
    //   case EDIT_STREAM:
    //     return { ...state, [action.payload.id]: action.payload };
    //   case DELETE_STREAM:
    //     return _.omit(state, action.payload);
