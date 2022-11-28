import React from 'react';
import ReactDOM from 'react-dom/client';
import './lesson_7/index.css';
import App from './lesson_7/App';
import { BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </React.StrictMode>
);
