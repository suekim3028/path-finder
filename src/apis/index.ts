import API from "./API";
import * as commonApi from "./common.apis";

const APIInstance = API.getAxiosInstance();

export { API, commonApi, APIInstance };
