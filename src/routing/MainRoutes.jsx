import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../components/account/Login";
import Register from "../components/account/Register";

const MainRoutes = () => {
  const ROUTE = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 2,
      path: "/login",
      element: <Login />,
    },
    {
      id: 3,
      path: "/register",
      element: <Register />,
    },
  ];
  return (
    <Routes>
      {ROUTE.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
