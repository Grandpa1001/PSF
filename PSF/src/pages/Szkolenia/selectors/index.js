function getContactView(state){
  return state.view.szkolenia;
}

export function getFieldValue(state, fieldName){
  return getContactView(state)[fieldName] || '';
}
