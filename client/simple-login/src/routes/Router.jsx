import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Home from './../page/Home';
import PrivetRoute from "./PrivetRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
