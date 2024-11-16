import {
    createBrowserRouter,
  } from "react-router-dom";
  import LoginPage from "./App/Login/LoginPage";
  import JobListing from "./App/JobPosts/JobListing";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>HOME PAGE</div>,
    },
    {
      path: "/Home",
      element: <LoginPage />,
    },
    {
      path: "/About",
      element: <div>Hello world!</div>,
    },
    {
      path: "/Job-Listing",
      element: <JobListing />,
    },
    {
      path: "/Contact",
      element: <div>Hello world!</div>,
    },
    {
      path: "/Company-Showcase",
      element: <div>Hello world!</div>,
    },
  ]);
  