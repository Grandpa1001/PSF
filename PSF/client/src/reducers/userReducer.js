import {INSTRUKTOR} from '../constants/pages';
import {GET_SESSION, GET_SESSION_SUCCESS, GET_SESSION_FAILURE} from '../constants/actionTypes';

const initialState = {
  login: '',
  id: '',
  isUserLogged: false,
  isUserDataFetching: false,
}

export default function userReducer (state=initialState, action){
  if(action) {
    switch(action.type){
      case GET_SESSION:
        return {
          ...state,
          isUserDataFetching: true,
        }
      case GET_SESSION_SUCCESS:
      const {response} = action.response.data;
       return {
          ...state,
          ...response,
          isUserLogged: true,
          isUserDataFetching: false,
        }
      case GET_SESSION_FAILURE:
        return initialState
    }
  }
  return {
    ...state,
  }
}
