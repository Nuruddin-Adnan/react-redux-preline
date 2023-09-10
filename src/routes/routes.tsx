import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import BlankPage from "../pages/BlankPage/BlankPage";
import PrivateRoute from "./PrivateRoute";
import PrivatePage from "../pages/PrivatePage/PrivatePage";
import DynamicPage from "../pages/DynamicPage/DynamicPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blank-page",
        element: <BlankPage />,
      },
      {
        path: "/private-page",
        element: (
          <PrivateRoute>
            <PrivatePage />
          </PrivateRoute>
        ),
      },
      {
        path: `/dynamic-page/:id`,
        element: (
          <PrivateRoute>
            <DynamicPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
