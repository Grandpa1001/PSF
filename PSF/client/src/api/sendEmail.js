import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  //headers: {'asdasdsadd':'asdasda'}
})

export function sendEmail(){
  return request.get('sendEmail');
}
