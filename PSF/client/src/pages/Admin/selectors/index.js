function getAdminData(state){
  return state.view.admin;
}
export function getTitle(state){
  return getAdminData(state).title;
}

export function getDescription(state){
  return getAdminData(state).description;
}

export function getFile(state){
  return getAdminData(state).file;
}

export function isPending(state){
  return getAdminData(state).isPending;
}

export function isFormVisible(state){
  return getAdminData(state).isFormVisible;
}

export function getEditItemId(state){
  return getAdminData(state).editItemId;
}

export function getFilename(state){
  return getAdminData(state).filename;
}
