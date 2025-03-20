import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "./context/auth";

export function RequireAuth() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export default RequireAuth;
