import React, { useContext } from "react";
import { observer } from "mobx-react";

import { MSTStoreContext } from "mst/store";

import AppRouter from "./AppRouter";
import OnBoardingRouter from "./OnBoardingRouter";

const RootRouter = observer(() => {
  const mstStore = useContext(MSTStoreContext);
  const { domainStore } = mstStore;
  const { isUserLoggedIn } = domainStore;

  const renderScreen = isUserLoggedIn ? <AppRouter /> : <OnBoardingRouter />;

  return renderScreen;
});

export default RootRouter;
