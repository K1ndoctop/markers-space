import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { checkUserLogin, logout, updateToken } from "../../helpers/functions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-blue-400 w-full flex justify-end">
      {checkUserLogin() ? (
        <button
          className="mx-32"
          href="/"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      ) : (
        <>
          <button className="mx-32" href="/" onClick={() => navigate("/login")}>
            Login
          </button>
          <div className="hidden sm:flex">
            <button
              className="mx-32"
              href="/"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
