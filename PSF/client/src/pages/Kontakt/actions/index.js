import * as actionType from '../constants/actionTypes';
import * as emailApi from '../../../api/sendEmail';

export function changeForm(value, fieldName){
  return {
    type: actionType.CHANGE_FORM,
    fieldName,
    value,
  }
}

export function touchField(fieldName){
  return {
    type: actionType.TOUCH_FORM,
    fieldName,
  }
}

export function focusField(fieldName){
  return {
    type: actionType.FOCUS_FORM,
    fieldName,
  }
}

export function touchAllFields(){
  return {
    type: actionType.TOUCH_ALL,
  }
}

export function sendEmail(data){
  return dispatch => {
    dispatch({
      type: actionType.SEND_EMAIL,
      data,
    })
    return emailApi.sendEmail(data)
    .then((response) => dispatch(sendEmailSuccess(response, data)))
    .catch((errors) => dispatch(sendEmailFailure(errors.response, data)))
  }
}

function sendEmailSuccess(response, data){
  return {
    type: actionType.SEND_EMAIL_SUCCESS,
    data,
    response
  }
}

function sendEmailFailure(errors, data){
  return {
    type: actionType.SEND_EMAIL_FAILURE,
    data,
    errors,
  }
}

export function resetForm(){
  return {
    type: actionType.RESET_FORM,
  }
}
