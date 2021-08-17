import React, {PureComponent} from 'react';
import Page from '../../components/Page/Page';
import Paragraf from '../../components/Paragraf/Paragraf';
import FormContainer from '../../components/FormContainer/FormContainer';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';

export default class SzkoleniaComponent extends PureComponent{

  render(){
    const {changeForm, userName, userEmail} = this.props;
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
        </FormContainer>
      </Page>
    );
  }
}
