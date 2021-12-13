import * as request from  './requestHelper';
import FormData from 'form-data';



export function save(id, data){
  const form = new FormData();

  Object.keys(data).forEach((key) => {
    form.append(key, data[key]);
  });

  if(id){
    form.append('id', id);
  return request.post('portfolio', form, request.fileHeaders);
}else{
  return request.put('portfolio', form, request.fileHeaders);
  }
}

export function getList(){
  return request.get('portfolio');
}
