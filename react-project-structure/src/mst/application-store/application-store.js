import { types, getRoot, flow } from "mobx-state-tree";


import { BASE_URL, BASE_URL } from "config/constants";
import { handleApiRequest } from "services/api/apiMethods";
import { API_METHODS, TOAST_TYPE } from "common";



import example from "./example/example";


const ApplicationStore = types
  .model("ApplicationStore", {
   
    
    exampleStore: example,
   
  })
  .views(() => ({}))
  .actions((self) => ({
    reset() {
      Object.keys(self).forEach((key) => {
        self[key].reset && self[key].reset();
      });
      self.isSidebarCollapsed = false;
    },
    
   
    
    postData: flow(function* postData(data) {
      const { viewStore } = getRoot(self);
      const { apiStatusStore } = viewStore;
      const { setIsLoadingStatus } = apiStatusStore;
      const { toastStore } = viewStore;
      const { popToast } = toastStore;

      try {
        const url = `${BASE_URL}create_engagement`;
        setIsLoadingStatus("postEngagementData", false, false, true);
        const response = yield handleApiRequest({
          method: API_METHODS.POST,
          url,
          payload: data,
        });
        console.info(
          "Create Engagement API post successful",
          response?.data,
          "eng ID",
          response.data.data.eng_id
        );
        self.engagementContractId = response.data.data.eng_id;
        setIsLoadingStatus("postEngagementData", false, true, false);
        popToast("Engagement contract creation successful", TOAST_TYPE.SUCCESS);
      } catch (e) {
        console.error("Error in post engagement api", e);
        setIsLoadingStatus("postEngagementData", true, false, false);
        popToast(
          "Engagement contract creation failed! Please try again later",
          TOAST_TYPE.ERROR
        );
      }
    }),
     }));

export { ApplicationStore };
