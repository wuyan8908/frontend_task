import React,{memo} from 'react';
import { useDispatch } from 'react-redux';
import history from '../history';
import {SIGN_OUT} from '../store/auth'

//import {put} from 'redux-saga/effects'



async function* doSignOut(dispatch) {
    try{
        const res = await fetch( '/api/v2/users/tokens', {
          method: 'DELETE',
        })
        dispatch(SIGN_OUT);
        //cookie.remove('token');
        history.push('/')
      }
      catch(error){
        console.log(error);
      }
}

function logOut(props){
  const dispatch = useDispatch(); 
  return{
    doSignOut(dispatch);
  }
  
}


export default memo(logOut);