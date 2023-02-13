import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withAuth } from "../../core/auth/hoc/withAuth";
import { InitialPage } from "../../pages/initial";

const router = createBrowserRouter([
    {
        path: '/',
        element: withAuth(InitialPage)
    }
]);

export const Routes = () => {
   return <RouterProvider router={router} />
}