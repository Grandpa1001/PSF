import React, {PureComponent} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';
import FormContainer from '../../components/FormContainer/FormContainer';
import Input from '../../components/Input/Input';

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
          <Input
          value = {userName}
          onChange = {this.onInputChange}
          name="userName"
          />
          <Input
          value = {userEmail}
          onChange = {this.onInputChange}
          name="userEmail"
          />
        </FormContainer>
      </Page>
    );
  }
}
