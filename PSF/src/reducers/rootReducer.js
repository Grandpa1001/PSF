import {INSTRUKTOR} from '../constants/pages';

const initialState={
  activePage: INSTRUKTOR.url,
}
export default function rootReducer (state=initialState, action){
  if(action){
    switch(action.type){
      case 'NAVIGATE_TO':
      return{
        ...state,
        activePage: action.url,
      }
    }
  }
  return{
    ...state,
  }
}
