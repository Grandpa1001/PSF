import * as actionType from '../constants/actionTypes';
const initialState = {
  name: '',
  email:'',
  message: '',
}

export default function szkoleniaReducer(state = initialState, action){
  if(action){
    switch(action.type){
        case actionType.CHANGE_FORM:
          return {
            ...state,
            [action.fieldName]: action.value,
          }
  }
}
  return state;
}
