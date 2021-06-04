import history from '../utils/history';
export function navigateTo(url){
  history.push(url);
  return{
    type: 'NAVIGATE_TO',
    url,
  }
}
