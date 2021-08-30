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

isFormValid = (force = false ) => {
  const{userName, userEmail, userMessage, touchedFields} = this.props;
  const errors = {};
  if(touchedFields.name || force){
  if(userName.length === 0){
      errors.name = 'Pole imię jest wymagane';
  }else if(userName.length < 3){
      errors.name = 'Pole imię jest za krótkie';
  }
}

  if(touchedFields.email || force){
  if(userEmail.length === 0){
      errors.email = 'Pole e-mail jest wymagane';
  }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      errors.email = 'Pole e-mail jest błędne';
  }
}
  if(touchedFields.message || force){
  if(userMessage.length === 0){
        errors.message = 'Pole treść jest wymagane';
  }else if (userMessage.length < 3) {
        errors.message = 'Pole treść jest zbyt krótkie';
  }
}
    return errors;

  }

sendForm = () => {
  const {touchAllFields} = this.props;
  const errors = this.isFormValid(true);
  if(!errors.message && !errors.email && !errors.name){
    console.log('Wyślij formularz');
  }else{
    touchAllFields();
  }
}

  render(){
    const {
      changeForm,
      userName,
      userEmail,
      userMessage,
      touchField,
      focusField
    } = this.props;
    const errors = this.isFormValid();
    return(
      <Page title="Szkolenia">
        <Paragraf>
        W celu uzyskania zaproszenia na szkolenia skontaktuj się przez formularz. Odezwiemy się!
        </Paragraf>
        <FormContainer>
          <FormField label="Imię" isEmpty={userName.length === 0} errorMessage = {errors.name}>
            <Input
              value = {userName}
              onChange = {changeForm}
              onBlur = {touchField}
              onFocus = {focusField}
              name="name"
              isInvalid = {!!errors.name}
            />
          </FormField>

          <FormField label="E-mail" isEmpty={userEmail.length  === 0} errorMessage = {errors.email}>
            <Input
            value = {userEmail}
            onChange = {changeForm}
            onBlur = {touchField}
            onFocus = {focusField}
            name="email"
            isInvalid = {!!errors.email}
            />
          </FormField>

          <FormField label="Treść" isEmpty={userMessage.length  === 0} errorMessage = {errors.message}>
            <Textarea
            value = {userMessage}
            onChange = {changeForm}
            onBlur = {touchField}
            onFocus = {focusField}
            name="message"
            isInvalid = {!!errors.message}
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
