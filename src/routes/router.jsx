import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import ProjectDetails from "../pages/ProjectDetails";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            
        },
        {
            path: "/projects/:id",
            element: <ProjectDetails></ProjectDetails>,
           
        },

      ]
    },
  ]);