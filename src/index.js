import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//store
import { Provider } from "react-redux";
//reducer
import { store } from "./store";

import Index from "./views/index";
import { IndexRouters } from "./router";
import {LandingModulesRouter} from './router/landing-modules-router'
import { SimpleRouter } from "./router/simple-router";
import { DefaultRouter } from "./router/default-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  ...DefaultRouter,
  ...IndexRouters,
  ...SimpleRouter,
  ...LandingModulesRouter
] ,{basename: process.env.PUBLIC_URL });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router}></RouterProvider>
      </App>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
