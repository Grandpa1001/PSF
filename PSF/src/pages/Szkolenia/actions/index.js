import * as actionType from '../constants/actionTypes';

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
