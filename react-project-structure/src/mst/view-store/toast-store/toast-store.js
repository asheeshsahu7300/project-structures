import { types } from "mobx-state-tree";

const ToastStore = types
  .model("ToastStore", {
    toastMessage: types.string,
    showToast: types.boolean,
    toastType: types.union(
      types.literal("success"),
      types.literal("error"),
      types.literal("warning"),
      types.literal("info")
    ),
  })
  .actions((self) => ({
    /**
     * pop toast for 3 seconds
     * @param toastMessage
     */
    popToast(toastMessage, type) {
      self.toastMessage = toastMessage;
      self.showToast = true;
      self.toastType = type;
      setTimeout(() => {
        self.closeToast();
      }, 2000);
    },
    closeToast() {
      self.showToast = false;
    },
  }));

export default ToastStore;
