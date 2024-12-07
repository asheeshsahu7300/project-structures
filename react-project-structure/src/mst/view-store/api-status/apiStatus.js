import { types } from "mobx-state-tree";

export const ApiConstants = types.model("ApiConstants", {
  id: types.identifier,
  isError: types.boolean,
  hasFetched: types.boolean,
  isLoading: types.boolean,
});

export const ApiStatus = types
  .model("ApiStatus", {
    apiStatus: types.map(ApiConstants),
  })
  .actions((self) => {
    const setIsLoadingStatus = (id, isError, hasFetched, isLoading) =>
      self.apiStatus.set(id, {
        isError,
        hasFetched,
        isLoading,
        id,
      });

    const getApiStatus = (id) => {
      if (self.apiStatus.get(id)) {
        return self.apiStatus.get(id);
      } else {
        setIsLoadingStatus(id, false, false, false);
        return self.apiStatus.get(id);
      }
    };

    return { setIsLoadingStatus, getApiStatus };
  });

export const apiStatusData = {};
