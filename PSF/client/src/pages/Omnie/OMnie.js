import {connect} from 'react-redux';
import OMnieComponent from './OMnieComponent';
import * as globalAction from '../../actions/globalActions';
import * as globalSelector from '../../selectors/root';

function mapStateToProps(state){
  return {
    pageContent: globalSelector.getPageContent(state, 'omnie'),
  };
}
function mapDispatchToProps(dispatch){
  return {
    getPageContent: () => dispatch(globalAction.getPageContent('omnie')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OMnieComponent);
