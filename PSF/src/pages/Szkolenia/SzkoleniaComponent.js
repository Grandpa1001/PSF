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

  render(){
    const {changeForm, userName, userEmail, userMessage} = this.props;
    return(
      <Page title="Szkolenia">
        <Paragraf>
        W celu uzyskania zaproszenia na szkolenia skontaktuj się przez formularz. Odezwiemy się!
        </Paragraf>
        <FormContainer>
        <FormField label="Imię" isEmpty={userName.length === 0}>
          <Input
          value = {userName}
          onChange = {changeForm}
          name="name"
          />
          </FormField>
          <FormField label="E-mail" isEmpty={userEmail.length  === 0}>
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
            <Button>Wyślij</Button>
          </ButtonContainer>
        </FormContainer>
      </Page>
    );
  }
}
