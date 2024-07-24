import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Rootlayout from "./Layouts/rootLayout/Rootlayout.jsx";
import Home from "./pages/home/Home.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Signin from "./pages/signin/Signin.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Chatpage from "./pages/chatpage/chatpage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./Layouts/Dashboard/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <Signin />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        element: <DashboardLayout />,
        children:[
         { path:"/dashboard",
          element:<Dashboard />
         },
         { path:"/dashboard/chats/:id",
          element:<Chatpage />
         }

        ]
      },
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/dashboard",
      //   children: [
      //     { path: "/dashboard", element: <Dashboard /> },
      //     { path: "/dashboard/chats/:id", element: <Chatpage /> },
      //   ],
      // },
      // {
      //   path: "/signin",
      //   element: <Signin />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
      // {
      //   path: "/chat",
      //   element: <Chatpage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
