import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import Link from '../../../components/Link/Link';
import FormContainer from '../../../components/FormContainer/FormContainer';
import Input  from '../../../components/Input/Input';
import Textarea  from '../../../components/Textarea/Textarea';
import Loader  from '../../../components/Loader/Loader';
import FormField  from '../../../components/FormField/FormField';
import Button, {SECONDARY, PRIMARY}  from '../../../components/Button/Button';
import ButtonContainer  from '../../../components/ButtonContainer/ButtonContainer';

export default class PortfolioForm extends PureComponent {
    static propTypes = {
      isPending: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      changeForm: PropTypes.func.isRequired,
      description: PropTypes.string.isRequired,
      file: PropTypes.object,
      showManage: PropTypes.func.isRequired,
      onSave: PropTypes.func.isRequired,
      editItemId: PropTypes.string,
      filename: PropTypes.string.isRequired,
    };

    constructor(){
      super();
      this.state = {showErrors: false};
    }

    isFormValid = () => {
      const errors = this.getFormErrors();
      return Object.keys(errors).length === 0;
    }

    getFormErrors = () => {
      const {title, file, description, fileName, editItemId} = this.props;
      const errors = {};
      if(title === '') {
        errors.title = 'Tytuł jest pusty';
      }
      if(description === ''){
        errors.description = 'Opis jest pusty';
      }
      if(file === null && !editItemId){
        errors.file = 'Plik jest niepodany';
      }
      return errors;
    }

    getFormData = () => {
      const {
        title,
        file,
        description,
       } = this.props;

       return {
         title,
         file,
         description
       };
    }

    submit = () => {
      const {onSave, editItemId} = this.props;
      if(this.isFormValid()){
        this.setState({showErrors: false});
        onSave(editItemId, this.getFormData());
      }else{
        this.setState({showErrors: true});
      }
    }

    render() {
     const {isPending, title, description, file, changeForm, showManage, filename} = this.props;
     const errors = this.state.showErrors ? this.getFormErrors() : {};

      return (
        <Fragment>
          {isPending ? <Loader/> : (
            <FormContainer>
              <FormField
                label="Tytuł"
                errorMessage={errors.title}
                isEmpty={title === ''}
              >
                  <Input
                      type="text"
                      name="title"
                      value={title}
                      onChange={changeForm}
                      isInvalid= {!!errors.title}
                      />
              </FormField>
              <FormField
                label="Opis"
                isEmpty={description === ''}
                errorMessage={errors.description}
              >
                  <Textarea
                      name="description"
                      value={description}
                      onChange={changeForm}
                      isInvalid= {!!errors.description}
                      />
              </FormField>
              <FormField
                label="Plik"
                isEmpty={file === ''}
                errorMessage={errors.file}
              >
                  <Input
                      name="file"
                      type="file"
                      isInvalid= {!!errors.file}
                      onChange={changeForm}
                    />
              </FormField>

              {filename ? <FormField label="Obecny obrazek:">
                <img src={filename} width={300} />
              </FormField> : null}

              <ButtonContainer>
                  <Button type={SECONDARY} onClick={showManage}>Cancel</Button>
                  <Button type={PRIMARY} onClick={this.submit}>Save</Button>
              </ButtonContainer>
            </FormContainer>
          )}
        </Fragment>
      )
  }
}
