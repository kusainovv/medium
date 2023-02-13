import React from 'react';
import { Logotype } from '../../../../../public/img/Logotype';

const Input = `
    w-full
    mb-1
    mt-1
    p-5
    rounded-md
    shadow-md
    box-border
`;

export const Login = () => <div className={`
    h-screen
`}>

    <div className={`
        m-auto
        relative
        top-[50%]
        pr-1
        pl-1
        max-w-[400px]
        min-w-fit
        flex
        flex-col
        items-center
        -translate-y-2/3
    `}>
        <div className={`
            mb-10
        `}>
            <Logotype />
        </div>

        <form className={`
            w-full
            flex
            flex-col
        `}>
            <label className={`
                w-full
            `}>
                <input aria-label='Input your email' required aria-aria-required className={Input} type='email' placeholder='Your email' />
                <span className={`
                    hidden
                    absolute
                `}>Input your email</span>
            </label>

            <label className={`
                w-full
            `}>
                <input aria-label='Input your password' required aria-required className={Input} type='password' placeholder='Your password' />
                <span className={`
                    hidden
                    absolute
                `}>Input your password</span>
            </label>

            <button className={`
                w-2/4
                m-auto
                mt-3
                p-2
                bg-green-500
                w-inherit
                text-white
                rounded-md
            `}>Login</button>
        </form>
    </div>
</div>;
