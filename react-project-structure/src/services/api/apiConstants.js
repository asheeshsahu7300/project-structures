const commonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const DEFAULT_VALUE_FOR_ERROR_RESPONSE = {
  data: { message: "" },
  status: 0,
};

export const API_CONFIG = {
  baseURL: "",
  headers: commonHeaders,
  responseType: "json",
};
