export default class ApiError extends Error {
  ApiErrorData: ApiErrorData;
  static isApiError = (error: any): error is ApiError => {
    return error instanceof ApiError;
  };
  constructor(ApiErrorData: ApiErrorData) {
    super();
    this.ApiErrorData = ApiErrorData;
  }
}

export type ApiErrorData = {
  code: number;
  userMessage: string;
  userTitle?: string;
};
