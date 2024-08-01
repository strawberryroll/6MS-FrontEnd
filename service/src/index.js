import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { data } from "./send_data";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={data}/>
    </BrowserRouter>
  </React.StrictMode>
);
