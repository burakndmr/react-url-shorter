import React from "react";

import * as ReactDOMClient from "react-dom/client";
import "./Style/style.css";
import App from "./App";
import { ContextProvider } from "./Context/MainContext";
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
