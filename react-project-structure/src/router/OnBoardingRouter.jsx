import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { observer } from "mobx-react";

import Landing from "screens/Landing/Landing";

const OnBoardingRouter = observer(() => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
});

export default OnBoardingRouter;
