import React from "react";
import { redirect } from "react-router-dom";


export const withAuth = (Component: Function) => {

    // get is auth from store
    // https://stackoverflow.com/questions/56944422/how-would-i-use-react-hooks-to-replace-my-withauth-hoc
    if (false) {
        redirect("/login");
        return <></>
    }

    return <Component />;
}