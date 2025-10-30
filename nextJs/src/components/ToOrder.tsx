"use client"
import React from "react";

const ToOrder: React.FC = () => {
    const scrollHanddler = () => {
        const element = document.getElementById("apply-forms");
        element?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <button
                onClick={scrollHanddler}
                className="button p-2.5 rounded-[5px] cursor-pointer xm:max-sm:hidden">
                Want to order?
            </button>
            <button
                onClick={scrollHanddler}
                className="button px-2 py-1 rounded-[5px] text-xl cursor-pointer sm:hidden z-50">
                Order now!
            </button>
        </>

    )
}

export default ToOrder