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
