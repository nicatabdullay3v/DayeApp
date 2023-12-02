import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Howitworks from "../pages/Howitworks/Howitworks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Howitworks",
    element: <Howitworks />,
  },
]);
export default router;
