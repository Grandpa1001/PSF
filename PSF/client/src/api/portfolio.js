import * as request from './requestHelper';
import FormData from 'form-data';

function prepareData(data, isMultipartFormData){
  if(isMultipartFormData){
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      form.append(key, data[key]);
    });
    return form;
  }else{
    return data;
  }
}

export function save(id, data){
  const form =  prepareData(data, data.file);
  if(id){
    return request.post(`portfolio/${id}`, form, data.file ? request.fileHeaders : null);
  } else {
    return request.put('portfolio', form, request.fileHeaders);
 }
}

export function removeItem(id){
    return request.remove(`portfolio/${id}`);
}

export function getList(){
    return request.get('portfolio');
}
