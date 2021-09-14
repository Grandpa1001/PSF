import {connect} from 'react-redux';
import MaterialyComponent from './MaterialyComponent';
import * as globalSelector from '../../selectors/root';
import * as globalAction from '../../actions/globalActions';
function mapStateToProps(state){
  return {
    pageContent: globalSelector.getPageContent(state, 'materialy'),
  };
}
function mapDispatchToProps(dispatch){
  return{
    getPageContent: () => dispatch(globalAction.getPageContent('materialy')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialyComponent);
