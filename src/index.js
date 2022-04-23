import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "./Style/style.css";
import App from "./App";
import { ContextProvider } from "./Context/MainContext";
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
<Route path="/" component={App} />;
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
