import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Register from "../pages/register";
import { mainRoutesGenerator } from "../utils/mainRoutesGenerator";
import adminPath from "./adminpath.routes";
import PrivateRoute from "./privateRoute";
import { sharedPath } from "./sharedpath.routes";
import { userPath } from "./userpath.routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      <PrivateRoute role="admin">
        <App />
      </PrivateRoute>
    ),
    children: mainRoutesGenerator(adminPath, sharedPath),
  },
  {
    path: "/user",
    element: (
      <PrivateRoute role="user">
        <App />
      </PrivateRoute>
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
]);

export default router;
