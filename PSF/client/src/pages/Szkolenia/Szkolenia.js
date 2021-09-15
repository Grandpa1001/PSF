import {connect} from 'react-redux';
import SzkoleniaComponent from './SzkoleniaComponent';
import * as action from './actions';
import * as selector from './selectors';
import * as globalSelector from '../../selectors/root';
import * as globalAction from '../../actions/globalActions';
function mapStateToProps(state){
  return {
    userName:    selector.getFieldValue(state, 'name'),
    userEmail:   selector.getFieldValue(state, 'email'),
    userMessage: selector.getFieldValue(state, 'message'),
    touchedFields: selector.getFieldTouchedState(state),
    isEmailSend: selector.isEmailSend(state),
    isEmailPending: selector.isEmailPending(state),
    sendErrors: selector.getSendErrors(state),
    pageContent: globalSelector.getPageContent(state, 'szkolenia'),
  };
}
function mapDispatchToProps(dispatch){
  return{
    changeForm: (value, fieldName)=>dispatch(action.changeForm(value, fieldName)),
    touchField: (e, fieldName) => dispatch(action.touchField(fieldName)),
    focusField: (e, fieldName) => dispatch(action.focusField(fieldName)),
    touchAllFields: () => dispatch(action.touchAllFields()),
    sendEmail: data => dispatch(action.sendEmail(data)),
    resetForm: () => dispatch(action.resetForm()),
    getPageContent: () => dispatch(globalAction.getPageContent('szkolenia')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SzkoleniaComponent);
