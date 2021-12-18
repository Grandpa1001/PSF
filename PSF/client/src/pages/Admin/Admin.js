import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from './actions';
import * as globalActions from '../../actions/globalActions';
import * as portfolioActions from '../../actions/data/portfolio';
import * as navigateActions from '../../actions/navigate';

import * as globalSelectors from '../../selectors/root';
import * as dataSelectors from '../../selectors/data';
import * as selectors  from './selectors';

import AdminComponent from './AdminComponent';
import {LOGIN} from '../../constants/pages';

function mapStateToProps(state) {
    return {
        user: globalSelectors.getLoggedUser(state),
        isUserDataFetching: globalSelectors.isUserDataFetching(state),
        title: selectors.getTitle(state),
        file: selectors.getFile(state),
        description: selectors.getDescription(state),
        isPending: selectors.isPending(state),
        portfolioList: dataSelectors.getPortfolioList(state),
        isPortfolioFetching: dataSelectors.isPortfolioFetching(state),
        isPortfolioFetched: dataSelectors.isPortfolioFetched(state),
        isFormVisible: selectors.isFormVisible(state),
        editItemId: selectors.getEditItemId(state),
        filename: selectors.getFilename(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getSession: (callback) => dispatch(globalActions.getSession(callback)),
        goToLoginPage: () => dispatch(navigateActions.navigateTo(LOGIN.url)),
        changeForm: (value, fieldName) => dispatch(actions.changeForm(value,fieldName)),
        onSave: (id, formData) => dispatch(actions.saveForm(id, formData)),
        getPortfolioList: () => dispatch(portfolioActions.getPortfolioList()),
        editItem: (id, data) => dispatch(actions.editItem(id, data)),
        removeItem: (id) => dispatch(actions.removeItem(id)),
        showManage: () => dispatch(actions.reset()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent)
