import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';

import Loader  from '../../components/Loader/Loader';
import Heading  from '../../components/Heading/Heading';
import Button  from '../../components/Button/Button';
import ButtonContainer  from '../../components/ButtonContainer/ButtonContainer';
import PortfolioList  from './components/PortfolioList';
import PortfolioForm  from './components/PortfolioForm';
import './style/admin.less';

export default class AdminComponent extends Component {
    static propTypes = {
      user: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      file: PropTypes.object,
      description: PropTypes.string.isRequired,
      isPending: PropTypes.bool.isRequired,

      getSession: PropTypes.func.isRequired,
      goToLoginPage: PropTypes.func.isRequired,
      onSave: PropTypes.func.isRequired,
      changeForm: PropTypes.func.isRequired,
      portfolioList: PropTypes.array.isRequired,

      isUserDataFetching: PropTypes.bool.isRequired,
      isPortfolioFetching: PropTypes.bool.isRequired,
      isPortfolioFetched: PropTypes.bool.isRequired,
      isFormVisible: PropTypes.bool.isRequired,
      editItem: PropTypes.func.isRequired,
      editItemId: PropTypes.string,
      filename: PropTypes.string.isRequired,
      showManage: PropTypes.func.isRequired,
      removeItem: PropTypes.func.isRequired,
    };

    componentDidMount(){
      const {getSession} = this.props;
      getSession(this.onFetchSessionFinished);
    }

    onFetchSessionFinished = (error, response) => {
      const {isPortfolioFetching, isPortfolioFetched, goToLoginPage, getPortfolioList} = this.props;
      if(error){
        goToLoginPage();
      }else if(!isPortfolioFetching && !isPortfolioFetched) {
        getPortfolioList();
      }
    }

    addNewItem = ()=>{
      const {editItem} = this.props;
      editItem();
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
         onSave,
         isFormVisible,
         showManage,
         editItemId,
         filename,
         editItem,
         removeItem,
      } = this.props;
        return(
          <Page title="Panel administracyjny">
            {isUserDataFetching ? <Loader/> : (
              <Fragment>
                <Heading size={4}>Jesteś zalogowany jako: <b>{user}</b></Heading>
                {isFormVisible ? (
                    <PortfolioForm
                      isPending={isPending}
                      title={title}
                      changeForm={changeForm}
                      description={description}
                      file={file}
                      onSave={onSave}
                      showManage={showManage}
                      editItemId={editItemId}
                      filename={filename}
                    />
                  ) : (
                    <Fragment>
                      <ButtonContainer>
                        <Button onClick={this.addNewItem}>Dodaj nową pracę</Button>
                      </ButtonContainer>
                        {isPortfolioFetching ? <Loader/> : (
                          <PortfolioList
                            portfolioList={portfolioList}
                            editItem={editItem}
                            removeItem={removeItem}
                          />
                        )}
                    </Fragment>
                  )}
              </Fragment>
            )}
          </Page>
        )
    }
}
