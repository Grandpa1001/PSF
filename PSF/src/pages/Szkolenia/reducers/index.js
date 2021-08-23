import * as actionType from '../constants/actionTypes';
const initialState = {
  name: '',
  email:'',
  message: '',
  touchedFields:{
    name: false,
    email:false,
    message: false,
  }
}

export default function szkoleniaReducer(state = initialState, action){
  if(action){
    switch(action.type){
      case actionType.CHANGE_FORM:
        return {
          ...state,
          [action.fieldName]: action.value,
        }
      case actionType.TOUCH_FORM: {
          const newTouchedState = {...state.touchedFields};
          newTouchedState[action.fieldName] = true;
          return {
            ...state,
            touchedFields: newTouchedState,
          }
        }
  }
}
  return state;
}
