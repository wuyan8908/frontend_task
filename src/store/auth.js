//import _ from 'lodash';


export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const DO_SIGN_OUT = "DO_SIGN_OUT";

export const requestUser = (token) => ({
  type: GET_USER,
  token : token
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
