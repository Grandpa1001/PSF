import {connect} from 'react-redux';
import InstruktorComponent from './InstruktorComponent';
import * as globalSelector from '../../selectors/root';
import * as globalAction from '../../actions/globalActions';
function mapStateToProps(state){
  return {
    pageContent: globalSelector.getPageContent(state, 'instruktor'),
  };
}
function mapDispatchToProps(dispatch){
  return{
    getPageContent: () => dispatch(globalAction.getPageContent('instruktor')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InstruktorComponent);
