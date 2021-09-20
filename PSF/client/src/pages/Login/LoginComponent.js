import React, {Component} from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import Page from '../../components/Page/Page';
import FormContainer from '../../components/FormContainer/FormContainer';
import Input  from '../../components/Input/Input';
import FormField  from '../../components/FormField/FormField';
import Button  from '../../components/Button/Button';
import ButtonContainer  from '../../components/ButtonContainer/ButtonContainer';

export default class LoginComponent extends Component {
    static propTypes = {
        login: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        changeLogin: PropTypes.func.isRequired,
        changePassword: PropTypes.func.isRequired,
        loginUser: PropTypes.func.isRequired,
    };

    submit = () => {
        const {password, authenticate, login} = this.props;
        console.log('md5('+password+') & submit', md5(password));
    }

    onLoginFinished = (error, success) => {
      if(success){
        this.props.goToAdminPage();
      }
    }

    render() {
        const {login, password, errorMessage, changeLogin, changePassword} = this.props;
        return <Page>
                <FormContainer>
                  <FormField
                    label="Login"
                    isEmpty={login === ''}
                  >
                      <Input
                          type="text"
                          name="login"
                          value={login}
                          onChange={changeLogin}/>
                  </FormField>
                  <FormField
                    label="Password"
                    errorMessage={errorMessage}
                    isEmpty={password === ''}
                  >
                      <Input
                          type="password"
                          name="password"
                          value={password}
                          onChange={changePassword}/>
                  </FormField>
                  <ButtonContainer  >
                      <Button type="primary" onClick={this.submit}>Login</Button>
                  </ButtonContainer>
                </FormContainer>
            </Page>
    }
}
