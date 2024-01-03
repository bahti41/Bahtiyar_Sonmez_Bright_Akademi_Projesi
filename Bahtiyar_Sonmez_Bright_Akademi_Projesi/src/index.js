import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BauProvider } from "./Contexts/BauContext";

ReactDOM.render(
  <BauProvider>
    <App />
  </BauProvider>,
  document.getElementById("root")
);
