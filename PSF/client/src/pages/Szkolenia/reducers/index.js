import * as actionType from '../constants/actionTypes';
const initialState = {
  name: '',
  email:'',
  message: '',
  touchedFields:{
    name: false,
    email:false,
    message: false,
  },
  isEmailPending: false,
  isEmailSend: false,
  sendErrors: {},
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
        case actionType.FOCUS_FORM: {
            const newTouchedState = {...state.touchedFields};
            newTouchedState[action.fieldName] = false;
            return {
              ...state,
              touchedFields: newTouchedState,
            }
          }
          case actionType.TOUCH_ALL: {
              return {
                ...state,
                touchedFields:{
                  name: true,
                  email:true,
                  message: true,
                }
              }
            }
          case actionType.SEND_EMAIL: {
              return {
                ...state,
                isEmailPending: true,
              }
          }

          case actionType.SEND_EMAIL_SUCCESS: {
              return {
                ...initialState,
                isEmailSend: true,
              }
          }

          case actionType.SEND_EMAIL_FAILURE: {
              return {
                ...state,
                isEmailPending: false,
                sendErrors: action.erros,
              }
          }
          case actionType.RESET_FORM: {
              return {
                ...initialState,
              }
          }
        }
      }
  return state;
}
