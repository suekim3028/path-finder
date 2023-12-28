import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

type CustomAxiosInstance = {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
};

class API {
  static axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
  });

  private isResponseInitialized = false;

  getAxiosInstance() {
    return API.axiosInstance as CustomAxiosInstance;
  }

  //   stage, prod 에 따라서 분기
  initialize() {
    this.setRequestInterceptor();
    this.setResponseInterceptor();
  }

  private setRequestInterceptor() {
    const headers: Record<string, string | number> = {};

    const authToken = ""; // TODO

    if (authToken) {
      headers.Authorization = `${authToken}`;
    }

    API.axiosInstance.interceptors.request.use((config) => {
      for (const key in headers) {
        config.headers.set(key, headers[key]);
      }

      return config;
    });
  }

  private setResponseInterceptor() {
    if (!this.isResponseInitialized) {
      this.isResponseInitialized = true;

      const responseInterceptor = {
        onFulfilled: (response: AxiosResponse) => {
          return response.data;
        },
        onRejected: ({ response }: { response: AxiosResponse }) => {
          return Promise.reject();
        },
      };

      API.axiosInstance.interceptors.response.use(
        responseInterceptor.onFulfilled,
        responseInterceptor.onRejected
      );
    }
  }
}

export default new API();
