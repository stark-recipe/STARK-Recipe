/**
 * ************************************
 *
 * @module  index.js
 * @author  julie, tim
 * @date    apr 26, 2018
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */
// import everything

import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from "./App.jsx";
import store from './store';

render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById("app")
);
