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

export function sendEmail(){
  return dispatch => {
    dispatch({
      type: actionType.SEND_EMAIL,
    })
    return emailApi.sendEmail()
    .then((response) => dispatch(sendEmailSuccess(response)))
    .catch((errors) => dispatch(sendEmailFailure(errors)))
  }
}

function sendEmailSuccess(response){
  return {
    type: actionType.SEND_EMAIL_SUCCESS,
    response
  }
}

function sendEmailFailure(errors){
  return {
    type: actionType.SEND_EMAIL_FAILURE,
    errors
  }
}
