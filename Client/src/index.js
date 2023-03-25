import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Donate from "./routes/Donate";
import Ttoe from "./routes/Ttoe";
import Urgent from "./routes/Urgent";
import Appform from "./Appform";
import AfterLoader from "./components/loader/AfterLoader";
import Loader from "./components/loader/Loader";

// import Loader from "./components/loader/Loader";

const AppLayout = () => {
  
  return (
    <>
      <Navbar />
      <Outlet />

      {/* <Appform></Appform> */}
      {/* <Loader></Loader> */}
    </>
  );
};
const router = createBrowserRouter([
  
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Donate",
        element: <Donate />,
      },
      { 
        path: "Ttoe",
        element: <Ttoe />,
      },
      {
        path: "Urgent",
        element: <Urgent />,
      },
      {
        path: "Appform",
        element:<Appform />
      },
      {
        path:"AfterLoader",
        element: <AfterLoader/>,
      //  element : {showLoader?(<Loader/>):(<Navbar/>)}
      },
      {
        path:"Loader",
        element: <Loader/>,
      }
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
