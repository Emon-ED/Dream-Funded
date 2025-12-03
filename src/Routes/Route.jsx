import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Layouts/Home/Home";
import SignUp from "../AuthCompo/SignUp/SignUp";
import SignIn from "../AuthCompo/SignIn/SignIn";
import Scholarship from "../Layouts/Scholarships/Scholarship";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Layouts/Home/Carts/ViewDetails";
import About from "../AboutUs/About";
import ContactMe from "../Layouts/Contact/ContactMe";
import ApplyNow from "../Layouts/Home/Carts/ApplyNow";
import Dashboard from "../Dashboard/DashbordCompo/Dashboard";
import { path } from "framer-motion/client";
import MyApplication from "../Dashboard/MyApplications/MyApplication";
import Profile from "../Dashboard/Profiles/Profile";
import ProInbox from "../Dashboard/DashbordCompo/SchProviderDash/ApplicationInbox/ProInbox";
import ProAnalytics from "../Dashboard/DashbordCompo/SchProviderDash/ProAnalytics/ProAnalytics";
import ProFund from "../Dashboard/DashbordCompo/SchProviderDash/ProFund/ProFund";
import ProviderPrograms from "../Dashboard/DashbordCompo/SchProviderDash/ProgramOverviewCards/ProviderPrograms";
import ProAccountSetting from "../Dashboard/DashbordCompo/SchProviderDash/ProAccountSetting/ProAccountSetting";
import ContentAllow from "../Dashboard/DashbordCompo/AdminDash/ContentAllowence/ContentAllow";
import Users from "../Dashboard/DashbordCompo/AdminDash/Users/Users";
import VerificationSection from "../Dashboard/DashbordCompo/AdminDash/UserManagement/VerificationSection";
import InfoTraking from "../Dashboard/DashbordCompo/AdminDash/InfoTrack/InfoTraking";
import Notification from "../Dashboard/Notifications/Notification";
import Document from "../Dashboard/Documents/Document";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<ContactMe></ContactMe>
          },
          {
              path:"/scholarship",
              element:<PrivateRoute><Scholarship></Scholarship></PrivateRoute>
          },
        {
            path:"/scholarship/:id",
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        },
        {
            path:"/scholarship/apply/:id",
            element:<PrivateRoute><ApplyNow></ApplyNow></PrivateRoute>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        

      ]
    },
    {
      path: "dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {path:'myApplications',
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {path:'profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        // Account settings--------------------
        {path:'document',
          element:<PrivateRoute><Document></Document></PrivateRoute>
        },
        {path:'notification',
          element:<PrivateRoute><Notification></Notification></PrivateRoute>
        },

// Shcolaship Provider Dashboard Routes --------------------------
          {path:'provider/applications',
          element:<PrivateRoute><ProInbox></ProInbox> </PrivateRoute>
        },
        {path:'provider/profile',
          element:<PrivateRoute><ProAnalytics></ProAnalytics></PrivateRoute>
        },
        // Account settings--------------------
        {path:'provider/document',
          element:<PrivateRoute><ProFund></ProFund></PrivateRoute>
        },
        {path:'provider/notification',
          element:<PrivateRoute><ProviderPrograms></ProviderPrograms></PrivateRoute>
        },
        {path:'provider/accountSetting',
          element:<PrivateRoute><ProAccountSetting></ProAccountSetting></PrivateRoute>
        },

        // Adming Dashboard Routes --------------------------
            {path:'admin/infoTracking',
          element:<PrivateRoute><InfoTraking></InfoTraking> </PrivateRoute>
        },
        {path:'admin/verification',
          element:<PrivateRoute><VerificationSection></VerificationSection></PrivateRoute>
        },
        // Account settings--------------------
        {path:'admin/usersManagement',
          element:<PrivateRoute><Users></Users></PrivateRoute>
        },
        {path:'admin/contentAllowance',
          element:<PrivateRoute><ContentAllow></ContentAllow></PrivateRoute>
        },

      ]
    }
  ]);

export default router;