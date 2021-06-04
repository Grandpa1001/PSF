import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import App from './containers/App/App';
import {Provider} from 'react-redux';
import store from './store';
import history from './utils/history';

ReactDOM.render (
  <Provider store={store}>
  <Router history={history}>
  <App/>
  </Router>
</Provider>
  , document.getElementById("app"));
