
import { Provider } from "hooks-for-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root"
import Admin from "./admin";
import Home from "./home";



 const router = createBrowserRouter([
   {
     element: <Root />,
     path: "/",
     children: [
       {
         path: "/",
         element: <Home />,
       },
       {
         path: "admin",
         element: <Admin />,
       },
     ],
   },
 ]);







ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
