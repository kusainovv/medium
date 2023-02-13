import React from "react";
import { Navigate, redirect, useLocation } from "react-router-dom";


export const withAuth = (Component: Function) => {
    // get is auth from store
    // https://stackoverflow.com/questions/56944422/how-would-i-use-react-hooks-to-replace-my-withauth-hoc
    if (true) {
        return <Navigate to='/login' />
    }

    return <Component />;
}