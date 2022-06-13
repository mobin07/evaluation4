import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const RequiredAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const from = {
    pathname: location.pathname,
  };

  if (isAuthenticated) return children;
  return <Navigate to={"/login"} state={from} replace />;
};

export default RequiredAuth;
