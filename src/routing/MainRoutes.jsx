import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../components/account/Login";
import Register from "../components/account/Register";
import CardCreate from "../components/card/CardCreate";
import CardEdit from "../components/card/CardEdit";
import CardList from "../components/card/CardList";

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
    {
      id: 4,
      path: "/cards",
      element: <CardList />,
    },
    {
      id: 5,
      path: "card-create",
      element: <CardCreate />,
    },
    {
      id: 6,
      path: "card-edit",
      element: <CardEdit />,
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
