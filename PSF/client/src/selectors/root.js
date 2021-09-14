function getRoot(state){
  return state.root;
}

export function getActivePage(state){
  return getRoot(state).activePage;
}


export function getPageContent(state, pageName){
  return getRoot(state).pageContent[pageName];
}
