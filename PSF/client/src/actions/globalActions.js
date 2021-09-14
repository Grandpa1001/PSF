import * as actionType from '../constants/actionTypes';
import * as pageApi from '../api/pages';

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
