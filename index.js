import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ContextProvider} from './DataContext';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ContextProvider>
  <Router>
      <App />
  </Router>
</ContextProvider>,
  document.getElementById("root")
);
