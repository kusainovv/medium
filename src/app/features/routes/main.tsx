import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withAuth } from "../../core/auth/hoc/withAuth";
import { ArticlesPage } from "../../pages/articles";
import { LoginPage } from "../../pages/login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
        // element: withAuth(ArticlesPage)
    },

    {
        path: '/login',
        element: <LoginPage />
    }
]);

export const Routes = () => {
   return <RouterProvider router={router} />
}