import {
    LOGIN_CHANGE_USER_LOGIN,
    LOGIN_CHANGE_USER_PASSWORD,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
} from '../constants/actionTypes';

import * as loginApi from '../../../api/login';

export function changeLogin(login) {
    return {
        type: LOGIN_CHANGE_USER_LOGIN,
        login
    };
}

export function changePassword(password) {
    return {
        type: LOGIN_CHANGE_USER_PASSWORD,
        password
    };
}

export function loginUser(login, password, callback){
  return dispatch => {
    dispatch({
      type: LOGIN_USER,
      login,
      password,
    })
    return loginApi.loginUser(login, password)
    .then((response) => dispatch(getPageContentSuccess(response, callback)))
    .catch((errors) => dispatch(getPageContentFailure(errors.response, callback)))
  }
}

function getPageContentSuccess(response, callback){
  if(callback){
    callback(null,response);
  }
  return {
    type: LOGIN_USER_SUCCESS,
    response,
  }
}

function getPageContentFailure(errors, callback){
  if(callback){
    callback(errors);
  }
  return {
    type: LOGIN_USER_FAILURE,
    errors,
  }
}
