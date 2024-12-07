import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { MSTStoreContext } from "mst/store";


const AppRouter = observer(() => {
  const { domainStore } = useContext(MSTStoreContext);
  

  const location = useLocation();
  const navigate = useNavigate();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

 

 

  return (
    <Routes>
      
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
});

export default AppRouter;
