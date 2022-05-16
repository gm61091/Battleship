import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import App from './App';
import store from "./store";
import checkToken from './utils/checkToken';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

checkToken();

const root = ReactDOM.createRoot(document.getElementById('root'));
setTimeout(() => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}, 500)