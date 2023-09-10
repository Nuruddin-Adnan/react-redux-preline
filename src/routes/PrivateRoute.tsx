import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user } = useAppSelector((state) => state.auth);

  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
