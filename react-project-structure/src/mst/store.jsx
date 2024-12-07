import { types } from "mobx-state-tree";
import React, { createContext } from "react";

import { ApplicationStore, ApplicationStoreData } from "./application-store";
import { DomainStore, DomainStoreData } from "./domain-store";
import { ViewStore, ViewStoreData } from "./view-store";

const RootStore = types
  .model("RootStore", {
    applicationStore: ApplicationStore, // It will handle all the data that is required for the application
    domainStore: DomainStore, // It will handle all the data related to the user
    viewStore: ViewStore, // It will handle all the data that provides visual feedback to the user
  })
  .actions(() => ({
    afterCreate() {
      //   log.debug('Root Store created');
    },
  }));

function createStore() {
  const applicationStore = ApplicationStore.create(ApplicationStoreData);
  const domainStore = DomainStore.create(DomainStoreData);
  const viewStore = ViewStore.create(ViewStoreData);

  const store = RootStore.create({
    applicationStore,
    domainStore,
    viewStore,
  });

  return store;
}

const mstStore = createStore();

export { RootStore, mstStore };

export const MSTStoreContext = createContext(mstStore);

export const MSTStoreProvider = ({ children }) => {
  return <MSTStoreContext.Provider value={mstStore}>{children}</MSTStoreContext.Provider>;
};
