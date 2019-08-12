import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
serviceWorker.register();