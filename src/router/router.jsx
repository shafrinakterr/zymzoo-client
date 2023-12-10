import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../page/home/home/home/Home";
import Details from "../page/home/home/blog/details/Details";
import Login from "../page/login/Login";
import SingUp from "../page/singUp/SingUp";
import Gallery from "../page/gallery/Gallery";
import TrainerDetails from "../page/trainerList/TrainerDetails";
import TrainerList from "../page/trainerList/TrainerList";
import BeAtrainer from "../componets/beAtrainer/BeAtrainer";
import PriRouter from "../componets/priRouter/PriRouter";
import Dashbord from "../page/dashBorad/Dashbord";
import Error from "../page/error/Error";
import AllSubs from "../page/dashBorad/page/allSbuscriber/AllSubs";
import Alltrainers from "../page/dashBorad/page/alltrainers/Alltrainers";
import AppTrainer from "../page/dashBorad/page/apptrainer/AppTrainer";
import Classes from "../page/classes/Classes";
import Forums from "../page/forums/Forums ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      // blog data
      {
        path: '/details/:id',
        element: <Details></Details>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/trainer',
        element: <TrainerList></TrainerList>
      },
      {
        path: '/trainer/:id',
        element: <TrainerDetails></TrainerDetails>
      },
      {
        path: '/beAtrainer',
        element: <PriRouter><BeAtrainer></BeAtrainer></PriRouter>
      },
      {
        path: '/clasess',
        element: <Classes></Classes>
      },
      {
        path: '/formus',
        element: <Forums></Forums>
      }

    ]
  },
  {
    path: '/dashboard',
    element: <PriRouter><Dashbord></Dashbord></PriRouter>,
    children: [
      {
        path: '/dashboard/allSubscribers',
        element: <AllSubs></AllSubs>
      },
      {
        path: '/dashboard/alltrainers',
        element: <Alltrainers></Alltrainers>
      },
      {
        path: '/dashboard/apptrainer',
        element: <AppTrainer></AppTrainer>
      }
    ]
  },

]);

export default router;