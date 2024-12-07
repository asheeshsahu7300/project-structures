import { flow, getRoot, types } from "mobx-state-tree";

import { API_METHODS, TOAST_TYPE } from "common/constants";
import { snakeToCamelCaseObjectFormatter } from "common";
import { handleApiRequest } from "services/api/apiMethods";
import { BASE_URL } from "config/constants";




const DomainStore = types
  .model("DomainStore", {
   
    superAdmin: types.optional(types.maybeNull(types.number), 0),
    
  })
  .views(() => ({}))
  .actions((self) => ({
    afterCreate() {
      //   log.debug('Application Store created');
    },
   
    
    signIn: flow(function* signIn(emailId, password, accessToken = "") {
      const { viewStore } = getRoot(self);
      const { apiStatusStore, toastStore } = viewStore;
      const { popToast } = toastStore;
      const { setIsLoadingStatus } = apiStatusStore;
      try {
        const url = `${BASE_URL}user_login`;
        setIsLoadingStatus("signIn", false, false, true);
        const config = {
          headers: {
            Authorization: accessToken,
          },
        };
        const response = yield handleApiRequest({
          method: API_METHODS.POST,
          payload: {
            emailId: accessToken ? "" : emailId,
            password: accessToken ? "" : password,
            sso: accessToken.length ? 1 : 0, // 1 for sso, 0 for normal login
          },
          url,
          config,
        });
        if (typeof response?.data === "string") {
          popToast(response.data, TOAST_TYPE.ERROR);
        } else {
          const formattedData = snakeToCamelCaseObjectFormatter(response.data);
        
          self.superAdmin = formattedData.superAdmin;
        
          // localStorage.setItem("emailId", emailId);
          // localStorage.setItem("password", password);
        
          popToast("Logged in successfully!", TOAST_TYPE.SUCCESS);
          self.isUserLoggedIn = true;
        }
        setIsLoadingStatus("signIn", false, true, false);
        return true;
      } catch (e) {
        console.error("Error in signIn API", e);
        setIsLoadingStatus("signIn", true, false, false);
        popToast("Email address or password is incorrect", TOAST_TYPE.ERROR);
      }
    }),
    
    

  }));

export { DomainStore };
