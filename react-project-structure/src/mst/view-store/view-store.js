import { types } from "mobx-state-tree";

import { ApiStatus } from "./api-status/apiStatus";
import { ToastStore } from "./toast-store";

const ViewStore = types
  .model("ViewStore", {
    showLoader: types.boolean,
    toastStore: ToastStore,
    apiStatusStore: ApiStatus,
  })
  .views(() => ({}))
  .actions((self) => ({
    afterCreate() {
      //   log.debug('View Store created');
    },
    setLoader: (state) => {
      self.showLoader = state;
    },
  }));

export { ViewStore };
