import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  const ROUTE = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
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
