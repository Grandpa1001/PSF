import {GET_PORTFOLIO_LIST, GET_PORTFOLIO_LIST_SUCCESS, GET_PORTFOLIO_LIST_FAILURE} from '../constants/actionTypes';

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
            isPortfolioFetching:  true,
        }
      case GET_PORTFOLIO_LIST_SUCCESS:
      const {response} = action.response.data;
       return {
         ...state,
         portfolioList: response,
         isPortfolioFetching: false,
         isPortfolioFetched: true,
        }
      case GET_PORTFOLIO_LIST_FAILURE:
      return{
      ...state,
      portfolioList: [],
      isPortfolioFetching: false,
      isPortfolioFetched: false,
    }
  }
  return {
    ...state,
  }
}
}
