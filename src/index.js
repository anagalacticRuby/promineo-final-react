import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CrudPage } from "./components/CrudPage";
import { Games } from "./components/Games";
import { Home } from "./components/Home";
import { References } from "./components/References";
import reportWebVitals from "./reportWebVitals";
import {NotFound} from "./components/NotFound"
// import './index.css';

/**
 * References:
 * https://www.youtube.com/watch?v=nDGA3km5He4 (React Router 6 Tutorial, outdated but still useful for basics)
 * https://reactrouter.com/en/main/start/tutorial (Official documentation for react router v6.16)
 */

// fetch(mockApi)///
// newValues = {p1Score, p2Score}
// const updateCard = (object, ...args) => {

// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/crudpage",
    element: <CrudPage />,
  },
  {
    path: "/references",
    element: <References />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
