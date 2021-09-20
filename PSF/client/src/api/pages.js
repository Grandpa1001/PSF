import {get} from './requestHelper';

export function getPageContent(pageName){
  return get('pages', {params: {url: pageName},withCredentials: true});
}
