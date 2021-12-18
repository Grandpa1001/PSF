import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';
import PortfolioList from './components/PortfolioList';
import './style/portfolio.less';
export default class PortfolioComponent extends PureComponent {

  static propTypes = {
    getPageContent: PropTypes.func.isRequired,
    getPortfolioList: PropTypes.func.isRequired,
    pageContent: PropTypes.object,
    isPortfolioFetched: PropTypes.bool.isRequired,
    isPortfolioFetching: PropTypes.bool.isRequired,
    portfolioList: PropTypes.array.isRequired,
  }

  componentDidMount(){
    const {pageContent, getPageContent, isPortfolioFetching, isPortfolioFetched, getPortfolioList} = this.props;
    if(!pageContent){
      getPageContent();
    }
    if(!isPortfolioFetched && !isPortfolioFetching){
      getPortfolioList();
    }
  }

  render () {
    const {
      pageContent,
      portfolioList,
    } =this.props;

    return (
      <Page title={pageContent?.title}>
        {pageContent ? (
          <Fragment>
            <Paragraf>
              {pageContent.description}
            </Paragraf>
            <PortfolioList portfolioList={portfolioList}/>
          </Fragment>
        ) : <b>Wczytuje treść...</b>}
      </Page>
    );
  }
}
