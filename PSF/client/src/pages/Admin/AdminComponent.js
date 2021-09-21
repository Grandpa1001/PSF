import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';

export default class LoginComponent extends Component {
  static propTypes = {

  };
  componentDidMount(){
  this.props.getSession(this.onFetchSessionFinished);
  }

  onFetchSessionFinished = (error, response) => {
  if(error){
    this.props.goToLoginPage();
    }
  }

  render() {
    const {isUserDataFetching, user} = this.props;
    return(
      <Page title="Panel administracyjny">
      {isUserDataFetching ? <b>Pobieram dane</b> :
      <p>Jesteś zalogowany jako : <b>{user}</b></p>
      }
      </Page>
    )
  }
}
