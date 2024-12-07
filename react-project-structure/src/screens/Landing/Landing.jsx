import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { MSTStoreContext } from "mst/store";
import CustomPieChart from "components/CustomPieChart/CustomPieChart";
import Spinx from "assets/images/spinx.png";

import "./LandingStyle.scss";

const Landing = observer(() => {
  const { viewStore } = useContext(MSTStoreContext);
  const { showLoader } = viewStore;
  const navigate = useNavigate();

  return <></>;
});

export default Landing;
