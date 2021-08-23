import React, {PureComponent} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';
import FormContainer from '../../components/FormContainer/FormContainer';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import FormField from '../../components/FormField/FormField';
import Button from '../../components/Button/Button';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';

export default class SzkoleniaComponent extends PureComponent{

isFormValid = () => {
  const{userName, userEmail, userMessage} = this.props;
  const errors = {};
  if(userName.length === 0){
      errors.name = 'Pole imię jest wymagane';
  }else if(userName.length < 3){
      errors.name = 'Pole imię jest za krótkie';
  }

  if(userEmail.length === 0){
      errors.email = 'Pole e-mail jest wymagane';
  }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      errors.email = 'Pole e-mail jest błędne';
  }

  if(userMessage.length === 0){
        errors.message = 'Pole treść jest wymagane';
  }else if (userMessage.length < 3) {
        errors.email = 'Pole treść jest zbyt krótkie';
  }
    return errors;

}

sendForm = () => {
  const errors = this.isFormValid();
  if(!errors.message && !errors.email && !errors.name){
    console.log('Wyślij formularz');
  }
}

  render(){
    const {changeForm, userName, userEmail, userMessage} = this.props;
    const errors = this.isFormValid();
    return(
      <Page title="Szkolenia">
        <Paragraf>
        W celu uzyskania zaproszenia na szkolenia skontaktuj się przez formularz. Odezwiemy się!
        </Paragraf>
        <FormContainer>
          <FormField
            label="Imię"
            isEmpty={userName.length === 0}
            errorMessage = {errors.name}
            >
            <Input
              value = {userName}
              onChange = {changeForm}
              name="name"
              isInvalid = {!!errors.name}
            />
          </FormField>
        <FormField
        label="E-mail"
        isEmpty={userEmail.length  === 0}

          >
          <Input
          value = {userEmail}
          onChange = {changeForm}
          name="email"
          />
          </FormField>
          <FormField label="Treść" isEmpty={userMessage.length  === 0}>
          <Textarea
          value = {userMessage}
          onChange = {changeForm}
          name="message"
          />
          </FormField>
          <ButtonContainer>
            <Button onClick = {this.sendForm}>Wyślij</Button>
          </ButtonContainer>
        </FormContainer>
      </Page>
    );
  }
}
