import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 30000,
})
const requestParams = {withCredentials: true};

export const get = (page, params) => request.get(page, {...params, ...requestParams});
export const post = (page, params, headers) => request.post(page, params, {...requestParams, ...headers});
export const put = (page, params, headers) => request.put(page, params, {...requestParams, ...headers});
export const remove = (page, params, headers) => request.delete(page, params, {...requestParams, ...headers});


export const fileHeaders = {headers: {'Content-type': 'multipart/form-data'}};
