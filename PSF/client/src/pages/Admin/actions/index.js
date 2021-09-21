import * as actionType from '../constants/actionTypes';


export function changeForm(value, fieldName) {
  return {
    type: actionType.CHANGE_FORM,
    value,
    fieldName
  }
}
