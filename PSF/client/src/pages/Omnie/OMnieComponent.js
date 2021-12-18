import React, {PureComponent, Fragment} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';

export default class OMnieComponent extends PureComponent {

  componentDidMount(){
    if(!this.props.pageContent){
      this.props.getPageContent();
    }
  }
  render () {
    const {
      pageContent,
    } =this.props;

    return (
      <Page title={pageContent?.title}>
        {pageContent ? (
          <Fragment>
            <Paragraf>
              {pageContent.description}
            </Paragraf>
          </Fragment>
        ) : <b>Wczytuje treść...</b>}
      </Page>
    );
  }
}
