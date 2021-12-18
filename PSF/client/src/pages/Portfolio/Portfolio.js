import {connect} from 'react-redux';
import PortfolioComponent from './PortfolioComponent';
import * as globalAction from '../../actions/globalActions';
import * as portfolioActions from '../../actions/data/portfolio';
import * as globalSelector from '../../selectors/root';
import * as dataSelector from '../../selectors/data';

function mapStateToProps(state){
  return {
    pageContent: globalSelector.getPageContent(state, 'portfolio'),
    isPortfolioFetched: dataSelector.isPortfolioFetched(state),
    isPortfolioFetching: dataSelector.isPortfolioFetching(state),
    portfolioList: dataSelector.getPortfolioList(state),
  };
}
function mapDispatchToProps(dispatch){
  return {
    getPageContent: () => dispatch(globalAction.getPageContent('portfolio')),
    getPortfolioList: () => dispatch(portfolioActions.getPortfolioList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioComponent);
