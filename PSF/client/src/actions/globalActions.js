import * as actionType from '../constants/actionTypes';
import * as pageApi from '../api/pages';
import * as loginApi from '../api/login';

export function getPageContent(pageName){
  return dispatch => {
    dispatch({
      type: actionType.GET_PAGE_CONTENT,
      pageName,
    })
    return pageApi.getPageContent(pageName)
    .then((response) => dispatch(getPageContentSuccess(response, pageName)))
    .catch((errors) => dispatch(getPageContentFailure(errors.response, pageName)))
  }
}

function getPageContentSuccess(response, pageName){
  return {
    type: actionType.GET_PAGE_CONTENT_SUCCESS,
    pageName,
    response
  }
}

function getPageContentFailure(errors, pageName){
  return {
    type: actionType.GET_PAGE_CONTENT_FAILURE,
    pageName,
    errors
  }
}


export function getSession(callback){
  return dispatch => {
    dispatch({
      type: actionType.GET_SESSION,
    })
    return loginApi.getSession()
    .then((response) => dispatch(getSessionSuccess(response, callback)))
    .catch((errors) => dispatch(getSessionFailure(errors.reposnse)))
  }
}

function getSessionSuccess(response, callback){
  if(callback){
    callback(null, response);
  }
  return{
    type: actionType.GET_SESSION_SUCCESS,
    response,

  }
}


function getSessionFailure(errors, callback){
  if(callback){
    callback(errors);
  }
  return{
    type: actionType.GET_SESSION_FAILURE,
    errors,
  }
}
