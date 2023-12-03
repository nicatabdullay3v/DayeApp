import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Howitworks from "../pages/Howitworks/Howitworks";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Babysitters from "../pages/Babysitters";
import BabySittingJobs from "../pages/BabysittingJobs";
import Favorites from "../pages/Favorites";
import BabySittersDetailPage from "../pages/BabySittersDetailPage/BabySittersDetailPage";
import Admin from "../pages/Admin/Admin";
import Parents from "../components/admin/pages/parents/Parents";
import BabysittersEmployee from "../components/admin/pages/babysitters/BabysittersEmployee";
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
  {
    path: "/BabySitters",
    element: <Babysitters />,
  },
  {
    path: "/BabySittingJobs",
    element: <BabySittingJobs />,
  },
  {
    path: "/babysittersDetail",
    element: <BabySittersDetailPage />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/Admin",
    element: <Admin/>,
  },
  {
    path: "/Parents",
    element: <Parents/>,
  },
  {
    path: "/Babysittersemployee",
    element: <BabysittersEmployee/>
  },

  
]);
export default router;
