import {
  GET_PORTFOLIO_LIST,
  GET_PORTFOLIO_LIST_SUCCESS,
  GET_PORTFOLIO_LIST_FAILURE,
} from '../constants/actionTypes';

import {SAVE_FORM_SUCCESS, REMOVE_ITEM_SUCCESS} from '../pages/Admin/constants/actionTypes';

const initialState = {
  portfolioList: [],
  isPortfolioFetching: false,
  isPortfolioFetched: false,
}

export default function userReducer (state=initialState, action){
  if(action) {
    switch(action.type){
      case GET_PORTFOLIO_LIST:
        return {
          ...state,
          isPortfolioFetching: true,
        }
      case GET_PORTFOLIO_LIST_SUCCESS:
      const newList = action.response.data.response;
       return {
          ...state,
          portfolioList: newList,
          isPortfolioFetching: false,
          isPortfolioFetched: true,
        }
      case GET_PORTFOLIO_LIST_FAILURE:
        return {
         ...state,
         portfolioList: [],
         isPortfolioFetching: false,
         isPortfolioFetched: false,
       }

       case SAVE_FORM_SUCCESS:
          const id = action.id;
          const newItem = action.response.data.response;
          let newListAfterSave = [...state.portfolioList];
          if(id) {
            newListAfterSave = [...state.portfolioList].map(item => item._id === id ? newItem : item);
          } else {
            newListAfterSave.push(newItem);
          }

          return {
              ...state,
              portfolioList: newListAfterSave,
        }

       case REMOVE_ITEM_SUCCESS:
          const newListAfterRemove = [...state.portfolioList].filter(item =>item._id !== action.id);
          return {
              ...state,
          portfolioList: newListAfterRemove,

        }
    }
  }
  return {
    ...state,

  }
}
