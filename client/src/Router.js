import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Submitted from "./Components/Submitted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Form />,
  },
  {
    path: "/submitted",
    element: <Submitted />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
