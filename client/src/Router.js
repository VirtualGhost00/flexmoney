import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Form />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
