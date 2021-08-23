function getContanctView(state){
  return state.view.szkolenia;
}

export function getFieldValue(state, fieldName){
  return getContanctView(state)[fieldName] || '';
}

export function getFieldTouchedState(state, fieldName){
  return getContanctView(state).touchedFields;
}
