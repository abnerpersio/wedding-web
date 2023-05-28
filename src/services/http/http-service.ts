import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type Config = {
  baseUrl: string;
};

export class HttpService {
  private readonly axios: AxiosInstance;

  constructor(config: Config) {
    this.axios = axios.create({ baseURL: config.baseUrl });
  }

  get<T = unknown>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(path, config);
  }

  post<T = unknown>(
    path: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axios.post<T>(path, data, config);
  }

  put<T = unknown>(
    path: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axios.put<T>(path, data, config);
  }

  delete<T = unknown>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.delete<T>(path, config);
  }
}
