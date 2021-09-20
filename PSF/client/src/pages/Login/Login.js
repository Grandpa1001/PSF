import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as actions from './actions';
import * as navigateActions from '../../actions/navigate';

import * as selectors from './selectors';
import LoginComponent from './LoginComponent';
//import {ADMIN} from '../../constants/pages';
function mapStateToProps(state) {
    return {
        login: selectors.getLogin(state),
        password: selectors.getPassword(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        changeLogin: login => dispatch(actions.changeLogin(login)),
        changePassword: password => dispatch(actions.changePassword(password)),
        loginUser: (login, password, callback) => dispatch(actions.loginUser(login, password, callback)),
      //  goToAdminPage: () => dispatch(navigateActions.navigateTo(ADMIN.url)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
