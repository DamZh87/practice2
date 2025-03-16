import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ENV } from '../../../config/environments';

const baseURL = ENV.TECHNICORN_API_URL;

export const apiTC = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createApiTC = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiTC({ ...config, ...options }).then((res) => res.data);
};

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;
