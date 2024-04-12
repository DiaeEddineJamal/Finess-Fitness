import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';

import CaloriesCounter from './components/caloriescounter';
import Workouts from './components/workouts';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupForm from './components/signupform';
import LoginForm from './components/loginform';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>,
  },
  {
    path: "/login",
    element: <LoginForm></LoginForm>,
  },
  {
    path: "/signup",
    element: <SignupForm></SignupForm>,
  },
  {
    path: "/Home",
    element: <App></App>,
  },
  {
    path: "/workouts",
    element: <Workouts></Workouts>,
  },
  {
    path: "/caloriescounter",
    element: <CaloriesCounter></CaloriesCounter>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
