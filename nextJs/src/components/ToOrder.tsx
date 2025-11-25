"use client"
import React from "react";
import { useRouter } from "next/navigation";

const ToOrder: React.FC = () => {
    const router = useRouter()
    const scrollHanddler = () => {
        const element = document.getElementById("apply-forms");
        if (element) {
            element?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/contact")
        }
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
                className="button px-2 py-1 rounded-[5px] text-xl cursor-pointer sm:hidden ">
                Order now!
            </button>
        </>

    )
}

export default ToOrder