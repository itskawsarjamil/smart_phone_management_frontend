import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Register from "../pages/register";
import { mainRoutesGenerator } from "../utils/mainRoutesGenerator";
import adminPath from "./adminpath.routes";
import ProtectedRoute from "./protectedRoute";
import { sharedPath } from "./sharedpath.routes";
import { userPath } from "./userpath.routes";
import ChangePassword from "../pages/changePassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role={["admin", "user"]}>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <div className="text-3xl font-bold">Heeelloooo...</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: mainRoutesGenerator(adminPath, sharedPath),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <App />
      </ProtectedRoute>
    ),
    children: mainRoutesGenerator(userPath, sharedPath),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
]);

export default router;
