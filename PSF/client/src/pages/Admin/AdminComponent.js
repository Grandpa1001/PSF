import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import FormField  from '../../components/FormField/FormField';
import Input  from '../../components/Input/Input';
import ButtonContainer  from '../../components/ButtonContainer/ButtonContainer';
import Button  from '../../components/Button/Button';
import Loader  from '../../components/Loader/Loader';
import PortfolioList  from './components/PortfolioList';

export default class LoginComponent extends Component {
  static propTypes = {
    user:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    file: PropTypes.object,
    description: PropTypes.string.isRequired,
    isPending:PropTypes.bool.isRequired,

    getSession: PropTypes.func.isRequired,
    goToLoginPage: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    changeForm: PropTypes.func.isRequired,
    portfolioList:PropTypes.array,

    isUserDataFetching: PropTypes.bool,
    isPortfolioFetching: PropTypes.bool,
    isPortfolioFetched: PropTypes.bool,
  };

  constructor(){
    super();
    this.state = {showErrors:false};
  }
  componentDidMount(){
  const{isPortfolioFetching, isPortfolioFetched} = this.props;
  if(!isPortfolioFetching && !isPortfolioFetched) {
      this.props.getPortfolioList();
  }
  this.props.getSession(this.onFetchSessionFinished);

  }

  onFetchSessionFinished = (error, response) => {
    if(error){
      this.props.goToLoginPage();
      }
    }

  isFormValid = () => {
    const errors = this.getFormErrors();
    return Object.keys(errors).length === 0;
  }

  getFormErrors = () => {
    const {title, file, description} = this.props;
    const errors = {};
    if(title === '') {
      errors.title = 'Tytuł jest pusty';
    }
    if(description === ''){
      errors.description = 'Opis jest pusty';
    }
    if(file ===''){
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
      description,
    };
  }

  submit = () => {
    const {onSave} = this.props;
    if(this.isFormValid()){
      this.setState({showErrors: false});
      onSave(null, this.getFormData());
    }else{
      this.setState({showErrors: true});
    }
  }


  render() {
    const {
      isUserDataFetching,
       user,
       title,
       file,
       description,
       changeForm,
       isPending,
       portfolioList,
       isPortfolioFetching,
     } = this.props;
     const errors = this.state.showErrors ? this.getFormErrors() : {};
    return(
      <Page title="Panel administracyjny">
      {isUserDataFetching ? <b>Pobieram dane</b> :
      <p>Jesteś zalogowany jako : <b>{user}</b></p>
      }
      <div>Dodaj nową pracę: </div>

      {isPortfolioFetching ? <Loader/> : (
          <PortfolioList portfolioList={portfolioList} />
      )}


      {isPending ? <Loader/> : (
        <Fragment>
        <FormField
        label ="Tytuł"
        errorMessage={errors.title}
        isEmpty={title === ''}
        >
            <Input
              type="text"
              name="title"
              value={title}
              onChange={changeForm}
              isInvalid={!!errors.tile}
              />
        </FormField>
        <FormField
          label="Opis"
          isEmpty={description === ''}
          errorMessage={errors.description}
          >
            <Input
                name="description"
                value ={description}
                onChange={changeForm}
                isInvalid={!!errors.description}
                />
        </FormField>
        <FormField
          label="Plik"
          isEmpty={file ===''}
          errorMessage={errors.file}
          >
              <Input
                name="file"
                type="file"
                isInvalid={!!errors.file}
                onChange={changeForm}
                />
        </FormField>
          <ButtonContainer >
              <Button type="primary" onClick={this.submit}>Save</Button>
          </ButtonContainer>
        </Fragment>
        )}
      </Page>
    )
  }
}
