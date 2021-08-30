import history from '../utils/history';
import {NAVIGATE_TO} from '../constants/actionTypes'
export function navigateTo(url){
  history.push(url);
  return{
    type: NAVIGATE_TO,
    url,
  }
}
