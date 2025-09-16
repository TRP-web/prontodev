"use client"

import Image from "next/image"
import React from "react"
const ApplyForms = () => {
    
    const emailForContacting = async (email:string) => {
        const req = await fetch("/api/contact-email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        setEmailInput("")
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
                                className="p-4 cursor-pointer text-2xl font-medium bg-orange text-white"
                            >
                                Contact Me!
                            </button>
                        </div>
                    </div>
                </form>
                <div className="mb-12">
                    not a robot...
                </div>
                <h3 className="text-2xl font-medium text-center mb-12">Or...</h3>
                <div className="max-w-[780px] m-auto mb-72">
                    <div className="">{/* slide */}
                        <Image
                            alt="slide image"
                            height={200}
                            width={300}
                            src={""}
                        />
                        <form action="#">
                            <label className="text-2xl block">Your business area ?</label>
                            <select name="area" id="area">
                                <option value="prodaction">prodaction</option>
                                <option value="prodaction">prodddaction</option>
                            </select>
                            <button>next</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyForms