function getUser(state){
  return state.user;
}


export function getLoggedUser(state){
  return getUser(state).login;
}


export function isUserDataFetching(state){
  return getUser(state).isUserDataFetching;
}
