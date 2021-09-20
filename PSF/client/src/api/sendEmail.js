import {post} from './requestHelper';

export function sendEmail(data){
  return post('sendEmail', {...data});
}
