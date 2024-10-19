import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Register from "../pages/register";
import Test from "../../test/test";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Test />,
      },
    ],
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
