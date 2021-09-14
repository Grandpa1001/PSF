import {request} from './requestHelper';

export function sendEmail(data){
  return request.post('sendEmail', {...data});
}
