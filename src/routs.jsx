import { createBrowserRouter } from "react-router-dom";
import { AddOrEditOrder } from "./Containers/Home/AddOrEditOrder";
import { Home } from "./Containers/Home";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-edit-order",
    element: <AddOrEditOrder />,
    errorElement: <ErrorPage />,
  },
]);
