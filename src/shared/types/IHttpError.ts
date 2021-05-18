import { AxiosResponse } from 'axios';

export interface IHttpError {
  requestError: boolean;
  responseError: boolean;
  status: string;
  error: AxiosResponse;
}
