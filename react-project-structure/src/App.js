import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import "./utils/variable.css";

import { MSTStoreContext } from "mst/store";
import Landing from "screens/Landing/Landing";
import SignIn from "screens/SignIn/SignIn";
import SignUp from "screens/SignUp/SignUp";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./screens/Dashboard/Dashboard";
import ManagePeople from "./screens/Manage-people/ManagePeople";
import OnboardingHome from "./screens/OnboardingHome/OnboardingHome";
import CreatePassword from "./screens/CreatePassword/CreatePassword";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import SoloOrCoAdmin from "./screens/SoloOrCoAdmin/SoloOrCoAdmin";
import ManageEngagementScreen from "screens/ManageEngagement/ManageEngagementScreen";
import AddNewClient from "screens/ManageEngagement/AddNewClient/AddNewClient";
import ManageOrganisationScreen from "screens/ManageOrganisation/ManageOrganisationScreen";
import ManagePeopleScreen from "screens/ManagePeople/ManagePeopleScreen";
import EmployeeContractScreen from "screens/ManagePeople/EmployeeContract/EmployeeContractScreen";
import TimeAndExpenseAddEdit from "screens/ManagePeople/TimeAndExpenseManagement/TimeAndExpenseAddEdit/TimeAndExpenseAddEdit";
import EngagementContractScreen from "screens/ManageEngagement/OrderBook/EngagementContractScreen/EngagementContractScreen";
import CreateInvoice from "screens/ManageEngagement/EngagementPlanning/CreateInvoice/CreateInvoice";
import InvoiceReview from "screens/ManageEngagement/EngagementPlanning/InvoiceReview/InvoiceReview";
import KeyTakeawaysForm from "screens/ManageEngagement/KeyTakeawaysForm/KeyTakeawaysForm";
import CustomerSurveyForm from "screens/ManageEngagement/CustomerSurveyForm/CustomerSurveyForm";
import EngagementTrackingDetailScreen from "screens/ManageEngagement/EngagementTracking/EngagementTrackingDetailScreen/EngagementTrackingDetailScreen";
import ReportsScreen from "screens/Reports/ReportsScreen";
import HelpdeskScreen from "screens/Helpdesk/HelpdeskScreen";
import TicketDetailsScreen from "screens/Helpdesk/TicketDetailsScreen/TicketDetailsScreen";
import AddTicketCategoryScreen from "screens/Helpdesk/AddTicketCategoryScreen/AddTicketCategoryScreen";
import DonnaAiScreen from "screens/DonnaAi/DonnaAiScreen";
import ServicesCartScreen from "screens/DonnaAi/RequestForServicesScreen/ServicesCartScreen/ServicesCartScreen";
import GadgetsScreen from "screens/DonnaAi/RequestForServicesScreen/GadgetsScreen/GadgetsScreen";
import RootRouter from "router/RootRouter";

const App = observer(() => {
  const { domainStore, viewStore } = useContext(MSTStoreContext);
  const { sessionLogin, isUserLoggedIn } = domainStore;
  const { setLoader } = viewStore;

  const navigate = useNavigate();

  const autoSignIn = async () => {
    setLoader(true);
    const response = await sessionLogin();
    if (Object.keys(response)?.length) {
      if (!response.superAdmin) {
        navigate("/donna-ai");
      } else {
        navigate(localStorage.getItem("lastVisitedRoute"));
      }
    }
    setLoader(false);
  };

  useEffect(() => {
    if (!isUserLoggedIn && localStorage.length) {
      autoSignIn();
    }
  }, []);

  return <RootRouter />;
});

export default App;
