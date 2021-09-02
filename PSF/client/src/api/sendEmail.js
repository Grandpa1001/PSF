import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 30000,
  //headers: {'asdasdsadd':'asdasda'}
})

export function sendEmail(data){
  return request.post('sendEmail', {...data});
}
