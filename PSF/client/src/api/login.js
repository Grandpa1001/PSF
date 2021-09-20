import {post, get} from './requestHelper';

export function getSession(){
  return get('login');
}

export function loginUser(login,password){
  return post('login', {login, password});
}
