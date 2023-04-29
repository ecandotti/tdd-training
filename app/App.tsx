import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import RoutesStack from "@/app/navigation/index";

import "ressources/css/styles.css";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesStack />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
