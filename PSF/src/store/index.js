import {createStore, combineReducers} from 'redux';
import rootReducer from '../reducers/rootReducer';
const mainStore = combineReducers(
  {
  root: rootReducer,
  }
)

const store = createStore(mainStore);

export default store;
