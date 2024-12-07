import "bootstrap/dist/css/bootstrap.min.css";
import "react-chat-elements/dist/main.css";
import "@szhsin/react-menu/dist/index.css";
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ColorRing } from "react-loader-spinner";

import { MSTStoreContext, MSTStoreProvider } from "mst/store";

import CustomSnackbar from "./components/CustomSnackbar/CustomSnackbar";
import App from "./App";

const MyApp = observer(() => {
  const mstStore = useContext(MSTStoreContext);
  const { viewStore } = mstStore;
  const { toastStore, showLoader } = viewStore;
  const { showToast, toastMessage, toastType } = toastStore;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MSTStoreProvider>
        <React.StrictMode>
          <BrowserRouter basename="">
            <App />
           
          </BrowserRouter>
        </React.StrictMode>
      </MSTStoreProvider>
    </LocalizationProvider>
  );
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
