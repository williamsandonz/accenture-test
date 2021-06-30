import axios, { AxiosRequestConfig, Method as HttpMethod } from 'axios';
import { environment } from '../environments/environment';

//NB: With more time I'd make this an injectable class rather than just a function
export const doHttpRequest = (method: HttpMethod, path: string, data?: any) => {
  const config: AxiosRequestConfig = {
    method,
    url: `${environment.apiUrl}/${path}`
  };
  if(data) {
    config.data = data;
  }
  return axios(config);
};
