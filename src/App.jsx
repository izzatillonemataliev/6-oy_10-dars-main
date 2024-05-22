import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Layout from "../Layout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export default function App() {
  function Redirect({ childeren }) {
    let user = JSON.parse(localStorage.getItem("user")) ?? false;

    return user ? childeren : <Navigate to="/" />;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/layout"
          element={
              <Layout />         
          }
        ></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
