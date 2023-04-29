import React from "react";
import { createRoot } from "react-dom/client";

import App from "app/App";
import { Provider } from "react-redux";
import { initReduxStore } from "@/store/reduxStore";
import { FakeAuthenticationGateway } from "@/adapters/secondary/authentication/gateways/fakeAuthenticationGateway";

const container = document.getElementById("app");
const root = createRoot(container!);
const store = initReduxStore({
  authenticationGateway: new FakeAuthenticationGateway(),
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
