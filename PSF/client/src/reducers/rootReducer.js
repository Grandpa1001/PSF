import {INSTRUKTOR} from '../constants/pages';
import {NAVIGATE_TO, GET_PAGE_CONTENT_SUCCESS} from '../constants/actionTypes';

const initialState={
  activePage: INSTRUKTOR.url,
  pageContent: {},
}
export default function rootReducer (state=initialState, action){
  if(action){
    switch(action.type){
      case NAVIGATE_TO :
      return{
        ...state,
        activePage: action.url,
      }
      case GET_PAGE_CONTENT_SUCCESS:
      const {pageName, response}= action
      return{
        ...state,
        pageContent: {...state.pageContent, [pageName]: response.data.response},
      }
    }
  }
  return{
    ...state,
  }
}
