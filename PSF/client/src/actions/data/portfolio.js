import * as actionType from '../../constants/actionTypes';
import * as portfolioApi from '../../api/portfolio';


export function getPortfolioList(){
  return dispatch => {
    dispatch({
      type: actionType.GET_PORTFOLIO_LIST,
    })
    return portfolioApi.getList()
    .then((response) => dispatch(getPortfolioListSuccess(response)))
    .catch((errors) => dispatch(getPortfolioListFailure(errors.response)))
  }
}

function getPortfolioListSuccess(response){
  return {
    type: actionType.GET_PORTFOLIO_LIST_SUCCESS,
    response
  }
}

function getPortfolioListFailure(errors){
  return {
    type: actionType.GET_PORTFOLIO_LIST_FAILURE,
    errors
  }
}
