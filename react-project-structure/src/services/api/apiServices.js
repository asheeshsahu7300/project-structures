import axios from "axios";

import * as ApiConstants from "./apiConstants";

export class APIService {
  axiosClient;

  static instance;

  /**
   *
   * create axios instance and configure interceptors
   */
  constructor() {
    this.axiosClient = axios.create(ApiConstants.API_CONFIG);
    this.configureInterceptors();
  }

  /**
   * @returns instance of APIService class
   */
  static getInstance = () => {
    if (!this.instance) {
      this.instance = new APIService();
    }
    return this.instance;
  };

  /**
   *
   * @param error required AxiosError
   * @returns error object
   */
  errorHandler = async (error) => {
    const { response, message } = error;
    const { status } = response;

    return {
      data: response.data,
      status,
      statusText: message,
    };
  };

  /**
   *
   * @param response required AxiosResponse
   * @returns response object
   */
  successHandler = (response) => {
    const { status, statusText } = response;
    return {
      data: response.data,
      status,
      statusText,
    };
  };

  /**
   *
   * setup interceptors: intercepts api response
   */
  configureInterceptors = () => {
    this.axiosClient.interceptors.response.use(
      (response) => this.successHandler(response),
      (error) => this.errorHandler(error)
    );

    this.axiosClient.interceptors.request.use((request) => request);
  };

  /**
   *
   * @param apiPath required apiPath (endpoints)
   * @returns api response
   */
  get = async (apiPath, config = {}) => {
    const res = await this.axiosClient
      .get(apiPath, config)
      .then((response) => {
        console.debug(
          "GET",
          `${ApiConstants.API_CONFIG.baseURL}${apiPath}`,
          response
        );
        return response;
      })
      .catch((error) => {
        console.error(
          "GET",
          `${ApiConstants.API_CONFIG.baseURL}${apiPath}`,
          error
        );
        return error;
      });
    return res;
  };

  /**
   *
   * @param apiPath required apiPath (endpoints)
   * @returns api response
   */
  delete = async (apiPath) => {
    const res = await this.axiosClient
      .delete(apiPath)
      .then((response) => response);
    return res;
  };

  /**
   *
   * @param apiPath required apiPath (endpoints)
   * @param payload required payload
   * @param config optional
   * @returns api response
   */
  post = async (apiPath, payload, config = {}) => {
    let res;
    if (config) {
      res = await this.axiosClient
        .post(apiPath, payload, config)
        .then((response) => {
          console.debug(
            "POST",
            `${ApiConstants.API_CONFIG.baseURL}${apiPath}`,
            payload,
            response
          );
          return response;
        });
    } else {
      res = await this.axiosClient.post(apiPath, payload).then((response) => {
        console.debug(
          "POST",
          `${ApiConstants.API_CONFIG.baseURL}${apiPath}`,
          payload,
          response
        );
        return response;
      });
    }
    return res;
  };

  /**
   *
   * @param apiPath required apiPath (endpoints)
   * @param payload required payload
   * @returns api response
   */
  put = async (apiPath, payload) => {
    const res = await this.axiosClient
      .put(apiPath, payload)
      .then((response) => response);
    return res;
  };

  /**
   *
   * @param apiPath required apiPath (endpoints)
   * @param payload required payload
   * @returns api response
   */
  patch = async (apiPath, payload, config = {}) => {
    const res = await this.axiosClient
      .patch(apiPath, payload)
      .then((response) => {
        console.debug(
          "PATCH",
          `${ApiConstants.API_CONFIG.baseURL}${apiPath}`,
          payload,
          response
        );
        return response;
      });
    return res;
  };
}
