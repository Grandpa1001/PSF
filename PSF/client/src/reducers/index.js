import {combineReducers} from 'redux';
import rootReducer from './rootReducer';

const viewReducers = {};

function createReducer(){
  const store = {};
  store.root = rootReducer;
  if(Object.keys(viewReducers).length > 0){
  store.view = combineReducers({...viewReducers});
  }
  return combineReducers(store);
}
export function extendReducers(store, reducer, name){
  if(!viewReducers[name] && typeof reducer === 'function'){
    viewReducers[name] = reducer;
  }
  store.replaceReducer(createReducer());
}




export default createReducer();
