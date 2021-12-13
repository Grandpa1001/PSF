function getData(state){
  return state.data;
}


export function getPortfolioList(state){
  return getData(state).portfolioList;
}


export function isPortfolioFetching(state){
  return getData(state).isPortfolioFetching;
}

export function isPortfolioFetched(state){
  return getData(state).isPortfolioFetched;
}
