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
import BabySittingJobsDetail from "../pages/BabySittingJobsDetail/BabySittingJobsDetail";
import RegisterStepTwo from "../pages/Register/RegisterStepTwo/RegisterStepTwo";
import ParentRegisterStepOne from "../pages/Register/ParentRegisterStepOne/ParentRegisterStepOne";
import RegisterStepOne from "../pages/Register/RegisterStepOne/RegisterStepOne";
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
    element: <RegisterStepTwo />,
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
    path: "/babysittersDetail/:id",
    element: <BabySittersDetailPage />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/Parents",
    element: <Parents />,
  },
  {
    path: "/Babysittersemployee",
    element: <BabysittersEmployee />,
  },
  {
    path: "/BabySittingJobsDetail/:id",
    element: <BabySittingJobsDetail />,
  },
  {
    path: "/Register/CreateProfile",
    element: <RegisterStepOne />,
  },
  {
    path: "/Register/CreateProfile/ComplateSignUp",
    element: <ParentRegisterStepOne />,
  },
]);
export default router;
