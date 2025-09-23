"use client"

import React from "react"
import Quiz from "./Quiz"
const ApplyForms = () => {
    
    const emailForContacting = async (email:string) => {
        setEmailInput("")
        const req = await fetch("/api/contact-email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        const reqjson = await req.json()
        console.log(reqjson)

    }
    const [emailInput, setEmailInput] = React.useState<string>("")
    return (
        <>
            <div>
                <h2 className="text-center text-4xl font-medium mb-14">Interesting?</h2>
                <form className="flex justify-center">
                    <div className="flex flex-col ">
                        <label htmlFor="email">Email:</label>
                        <div className="flex items-center">
                            {/* емейл ерор сделать когда и возможно проверки на емейлы  */}
                            <input
                                className="focus:outline-0 border border-gray-100 h-16 text-xl mr-12  min-w-[450px] pl-2"
                                type="email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                name="email"
                                id="email"
                                alt="email"
                            />
                            <button
                                onClick={(e) => {e.preventDefault(); emailForContacting(emailInput)} }
                                onSubmit={(e) => {
                                    e.preventDefault()
                                }}
                                className="p-4 cursor-pointer text-2xl font-medium button"
                            >
                                {/* mouse down styles here and everywhere. maybe one style for all buttons  */}
                                Contact Me!
                            </button>
                        </div>
                    </div>
                </form>
                <div className="mb-12">
                    not a robot...
                </div>
                <div className="relative">
                    <span className="h-0.5 w-[40%] absolute top-[calc(50%-1px)] left-0 bg-gray-100 "></span>
                    <span className="h-0.5 w-[40%] absolute top-[calc(50%-1px)] right-0 bg-gray-100"></span>
                    <h3 className="text-2xl font-medium text-center mb-12 relative">Or...</h3>
                </div>
                <Quiz/>
            </div>
        </>
    )
}

export default ApplyForms