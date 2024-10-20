import { ReactNode } from "react";

const PrivateRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: "admin" | "user" | undefined | ("admin" | "user" | undefined)[];
}) => {
  console.log(role);
  return children;
};

export default PrivateRoute;
