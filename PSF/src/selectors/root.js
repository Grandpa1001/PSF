function getRoot(state){
  return state.root;
}

export function getActivePage(state){
  return getRoot(state).activePage;
}
