import { API_METHODS } from "common/constants";

import { APIService } from "./apiServices";

export const handleApiRequest = async (data) => {
  const { method, url, payload = {}, config = {} } = data;

  const instance = APIService.getInstance();
  switch (method) {
    case API_METHODS.GET:
      try {
        const response = await instance.get(`${url}`, config);
        return response;
      } catch (e) {
        console.error("Axios Error", e);
      }
      break;
    case API_METHODS.POST:
      try {
        const response = await instance.post(`${url}`, payload, config);
        return response;
      } catch (e) {
        console.error("Axios Error", e);
      }
      break;
    case API_METHODS.PUT:
      try {
        const response = await instance.put(`${url}`, payload);
        return response;
      } catch (e) {
        console.error("Axios Error", e);
      }
      break;
    case API_METHODS.DELETE:
      try {
        const response = await instance.delete(`${url}`);
        return response;
      } catch (e) {
        console.error("Axios Error", e);
      }
      break;
    case API_METHODS.PATCH:
      try {
        const response = await instance.patch(`${url}`, payload, config);
        return response;
      } catch (e) {
        console.error("Axios Error", e);
      }
      break;
    default:
      return;
  }
};
