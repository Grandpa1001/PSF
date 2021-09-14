import {request} from './requestHelper';


export function getPageContent(pageName){
  return request.get('pages', {params: {url: pageName}});
}
