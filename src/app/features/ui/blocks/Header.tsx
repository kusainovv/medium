import React from "react";
import { Logotype } from "../../../../../public/img/Logotype";
import { WriteIcon } from "../../../../../public/img/WriteIcon";


export const Header = () => {
    return  <header className={`
    flex
    items-center
    justify-between
    p-5
`}>
    <Logotype />
    <input type='text' />

    <div className={`
        flex
        items-center
    `}>
        <WriteIcon />
    
        <div className={`
            ml-5
            w-[32px]
            h-[32px]
            bg-amber-500
            rounded-full
        `} />
    </div>
</header>
}