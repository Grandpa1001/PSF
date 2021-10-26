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
    })
    return portfolioApi.save(id, formData)
    .then((response) => dispatch(saveFormSuccess(response, id, formData)))
    .catch((errors) => dispatch(saveFormFailure(errors, id, formData)))
  }

}
function saveFormSuccess(response, id, formData){
  return {
    type: actionType.SAVE_FORM_SUCCESS,
    id, formData,
    response,
  }
}

function saveFormFailure(errors, id, formData){
  return {
    type: actionType.SAVE_FORM_FAILURE,
    id, formData,
    errors
  }
}
