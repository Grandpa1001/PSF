import React, {PureComponent, Fragment} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';
import FormContainer from '../../components/FormContainer/FormContainer';
import Input  from '../../components/Input/Input';
import Textarea  from '../../components/Textarea/Textarea';
import FormField  from '../../components/FormField/FormField';
import Button  from '../../components/Button/Button';
import ButtonContainer  from '../../components/ButtonContainer/ButtonContainer';

export default class KontaktComponent extends PureComponent {

  componentDidMount(){
    this.props.resetForm();
    if(!this.props.pageContent){
      this.props.getPageContent();
    }
  }

  isFormValid = (force = false) => {
    const {userName, userEmail, userMessage, touchedFields} = this.props;
    const errors = {};
    if(touchedFields.name || force){
      if(userName.length === 0){
        errors.name = 'Pole imię jest wymagane';
      } else if(userName.length < 3){
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
        errors.message = 'Pole message jest zbyt krótkie';
      }
    }
    return errors;
  }

  sendForm = () => {
    const {
      touchAllFields,
      sendEmail,
      userName,
      userEmail,
      userMessage,
    } = this.props;
    const errors = this.isFormValid(true);
    if(!errors.message && !errors.email && !errors.name ){
      sendEmail({userName,userEmail,userMessage});
    }else{
      touchAllFields();
    }
  }

  render () {
    const {
      changeForm,
      userName,
      userEmail,
      userMessage,
      touchField,
      focusField,
      isEmailPending,
      isEmailSend,
      sendErrors,
      resetForm,
      pageContent,
    } =this.props;

    const errors = this.isFormValid();
    return (
      <Page title={pageContent?.title}>
        {pageContent ? (
          <Fragment>
            <Paragraf>
              {pageContent.description}
            </Paragraf>
            {isEmailSend ? (
              <Fragment>
                <Paragraf>Dziękujemy za kontakt, możesz wysłać jeszcze jedną wiadomość jeśli chcesz.</Paragraf>
                <Button onClick={resetForm}>Wyślij nową wiadomość</Button>
              </Fragment>
            ) : (
                <FormContainer>
                  <FormField
                    label="Imię"
                    isEmpty={userName.length === 0}
                    errorMessage = {errors.name}
                    >
                    <Input
                      value={userName}
                      onChange={changeForm}
                      onBlur={touchField}
                      onFocus={focusField}
                      name="name"
                      isInvalid={!!errors.name}
                    />
                  </FormField>
                  <FormField
                    label="E-mail"
                    isEmpty={userEmail.length === 0}
                    errorMessage = {errors.email}
                    >
                    <Input
                      value={userEmail}
                      onChange={changeForm}
                      onBlur={touchField}
                      onFocus={focusField}
                      name="email"
                      isInvalid={!!errors.email}
                    />
                  </FormField>
                  <FormField
                    label="Treść"
                    isEmpty={userMessage.length === 0}
                    errorMessage = {errors.message}
                    >
                    <Textarea
                      value={userMessage}
                      onChange={changeForm}
                      onBlur={touchField}
                      onFocus={focusField}
                      name="message"
                      isInvalid={!!errors.message}
                    />
                  </FormField>
                  <ButtonContainer>
                    <Button onClick={this.sendForm} disabled={isEmailPending}>Wyślij</Button>
                  </ButtonContainer>
                </FormContainer>
            )}
          </Fragment>
        ) : <b>Wczytuje treść...</b>}
      </Page>
    );
  }
}
