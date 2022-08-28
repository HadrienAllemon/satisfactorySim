import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Factory from './pages/Factory';
import Transport from './pages/Transport';
import { UserProvider } from './contexts/userContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="factory" element={<Factory/>} />
            <Route path="transport" element={<Transport/>} />
          </Route>
          <Route path="login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
