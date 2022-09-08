import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/auth/auth.context";

export const ProtectedRoute = ({ children, admin }) => {
  const { isLogged, isLoadingLogged, user, role } = useAuthContext();
  //const location = useLocation();

  //if (isLoadingLogged) {
  //return <div>Loading...</div>;
  //}

  useEffect(() => {
    console.log("isLogged have changed", isLogged);
    console.log({ children, isLogged });
  }, [isLogged]);

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  if (!admin) return <Outlet />;

  if (admin && role === "ADMIN") {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};
