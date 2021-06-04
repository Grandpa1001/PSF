import {INSTRUKTOR} from '../constants/pages';

const initialState={
  activePage: INSTRUKTOR.url,
}
export default function rootReducer (state=initialState, action){
  return{
    ...state,
  }
}
