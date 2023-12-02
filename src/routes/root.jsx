import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Howitworks from "../pages/Howitworks/Howitworks";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Howitworks",
    element: <Howitworks />,
  },
  {
    path: "/Pricing",
    element: <Pricing />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);
export default router;
