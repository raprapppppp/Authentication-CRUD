import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { context } from "./AuthContext";

export const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(context);

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
