import React from "react";
import { useMountEffect } from "../../hook/useMountEffect";

type MyProps = {
    title: string;
    message: string;
}


export const Notification = (props: MyProps) => {

    const [show, setShow] = React.useState(true);
    const version: string = "0";


    useMountEffect(() => {
        const notification = localStorage.getItem("closed-notification");
        if (notification && notification === version) setShow(false);
    })

    function closeNotification() {
        localStorage.setItem("closed-notification", version); 
        setShow(false);
    }

    return (
        <div className={show ? '' : 'hidden'}>
            <div className="flex items-center justify-center p-2 bg-slate-100 min-h-10">
                <div className="mx-2 font-light text-center lg:text-left">
                    <p><span className="font-bold">{props.title} </span>{props.message}</p>
                </div>

                <button className="mx-3 opacity-50" onClick={closeNotification}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <g fill="none">
                            <path d="M20 20L4 4m16 0L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
};
