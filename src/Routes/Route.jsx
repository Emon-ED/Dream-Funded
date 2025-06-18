import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Layouts/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        // {
        //   path:'/web',
        //   element:<Web></Web>
        // }

      ]
    },
  ]);

export default router;