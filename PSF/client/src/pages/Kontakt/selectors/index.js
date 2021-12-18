function getContanctView(state){
  return state.view.contact;
}

export function getFieldValue(state, fieldName){
  return getContanctView(state)[fieldName] || '';
}

export function getFieldTouchedState(state, fieldName){
  return getContanctView(state).touchedFields;
}

export function isEmailPending(state, fieldName){
  return getContanctView(state).isEmailPending;
}

export function isEmailSend(state, fieldName){
  return getContanctView(state).isEmailSend;
}

export function getSendErrors(state, fieldName){
  return getContanctView(state).sendErrors;
}
