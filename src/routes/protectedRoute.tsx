import { ReactNode } from "react";
import {
  getCurrenttoken,
  logOut,
  TUser,
} from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: "admin" | "user" | undefined | ("admin" | "user" | undefined)[];
}) => {
  const token = useAppSelector(getCurrenttoken);

  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  const dispatch = useAppDispatch();

  if (role !== user?.role || !role?.includes(user?.role as string)) {
    dispatch(logOut());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
