import * as actionTypes from '../constants/actionTypes';

const initialState = {
  title: '',
  description: '',
  file: null,
  isPending: false,
  isFormVisible: false,
  editItemId: null,
  filename: '',

};

export default function moduleReducer(state = initialState, action) {
    const {type} = action;
    switch (type) {
      case actionTypes.CHANGE_FORM:
        const {value, fieldName} = action;
        return {
          ...state,
          [fieldName]: value,
        }

      case actionTypes.SAVE_FORM:
        return {
          ...state,
          isPending: true,
        }
      case actionTypes.SAVE_FORM_SUCCESS:
        return {
          ...state,
          isPending: false,
          title: '',
          description: '',
          file: null,
          isFormVisible: false,
          editItemId: null,
        }
      case actionTypes.SAVE_FORM_FAILURE:
        return {
          ...state,
          isPending: false,
        }
    case actionTypes.EDIT_ITEM:
      return {
        ...state,
        isFormVisible: true,
        editItemId: action.editItemId,
        title: action.itemData ? action.itemData.title : '',
        description: action.itemData ? action.itemData.description : '',
        file: null,
        filename: action.itemData ? action.itemData.filename : '',
      }
    case actionTypes.RESET:
      return {
        ...initialState
      }
      default:
          return state;
    }
}
