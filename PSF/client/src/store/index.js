import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import mainStore from '../reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
if (process.env.NODE_ENV ===`development`){
  const {createLogger} = require(`redux-logger`);
  middlewares.push(createLogger({collapsed:true}));
}

const store = compose(applyMiddleware(...middlewares))(createStore)(mainStore);

export default store;
