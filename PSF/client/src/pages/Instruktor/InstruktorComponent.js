import React, {PureComponent, Fragment} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';


export default class InstruktorComponent extends PureComponent{

componentDidMount(){
  if(!this.props.pageContent){
      this.props.getPageContent();
  }
}
  render(){
    const {
      pageContent,
    } = this.props;
    return(
      <Page title={pageContent?.title}>
      {pageContent ? (
        <Fragment>
        <Paragraf>
        {pageContent.description}
        </Paragraf>
        </Fragment>
      ) : <b>Wczytuję treść...</b>}
      </Page>
    );

  }
}
