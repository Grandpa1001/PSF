import React, {PureComponent} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';
import FormContainer from '../../components/FormContainer/FormContainer';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';

export default class Szkolenia extends PureComponent{

constructor(){
  super();
  this.state ={
    userName: '',
    userEmail:'',

  }
}
  onInputChange = (value,name) => {
    this.setState({[name]: value});
  }
  render(){
    const {userName, userEmail} = this.state;
    return(
      <Page title="Szkolenia">
        <Paragraf>
        W celu uzyskania zaproszenia na szkolenia skontaktuj się przez formularz. Odezwiemy się!
        </Paragraf>
        <FormContainer>
        <FormField label="Imię" isEmpty={userName.length === 0}>
          <Input
          value = {userName}
          onChange = {this.onInputChange}
          name="userName"
          />
          </FormField>
          <FormField label="Email" isEmpty={userEmail.length  === 0}>
          <Input
          value = {userEmail}
          onChange = {this.onInputChange}
          name="userEmail"
          />
          </FormField>
        </FormContainer>
      </Page>
    );
  }
}
