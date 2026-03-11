import { useTypedSelector } from "../app/hook.js";
import { Navigate, Outlet } from "react-router-dom";
import { PROTECTED_ROUTES } from "./common/routePath.jsx";

const AuthRoute = () => {
  const { accessToken, user } = useTypedSelector((state) => state.auth);

  if (!accessToken && !user) return <Outlet />;

  return <Navigate to={PROTECTED_ROUTES.OVERVIEW} replace />;
};

export default AuthRoute;
