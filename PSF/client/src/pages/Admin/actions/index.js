import * as actionType from '../constants/actionTypes';
import * as portfolioApi from '../../../api/portfolio';

export function changeForm(value, fieldName) {
  return {
    type: actionType.CHANGE_FORM,
    value,
    fieldName
  }
}

export function saveForm(id, formData){
  return dispatch => {
    dispatch({
      type: actionType.SAVE_FORM,
      id,
      formData
    });

    return portfolioApi.save(id, formData)
    .then((response) => dispatch(saveFormSuccess(response, id, formData)))
    .catch((errors) => dispatch(saveFormFailure(errors, id, formData)))
  }
}

function saveFormSuccess(response, id, formData){
  return {
    type: actionType.SAVE_FORM_SUCCESS,
    formData,
    id,
    response,
  }
}

function saveFormFailure(errors, id, formData){
  return {
    type: actionType.SAVE_FORM_FAILURE,
    formData,
    id,
    errors,
  }
}

export function editItem(editItemId, itemData){
  return {
    type: actionType.EDIT_ITEM,
    editItemId,
    itemData,
  }
}


export function removeItem(id){
  return dispatch => {
    dispatch({
      type: actionType.REMOVE_ITEM,
      id,
    });

    return portfolioApi.removeItem(id)
    .then((response) => dispatch(removeItemSuccess(response, id)))
    .catch((errors) => dispatch(removeItemFailure(errors, id)))
  }
}

function removeItemSuccess(response, id){
  return {
    type: actionType.REMOVE_ITEM_SUCCESS,
    id,
    response,
  }
}

function removeItemFailure(errors, id){
  return {
    type: actionType.REMOVE_ITEM_FAILURE,
    id,
    errors,
  }
}


export function reset(){
  return {
    type: actionType.RESET,
  }
}
