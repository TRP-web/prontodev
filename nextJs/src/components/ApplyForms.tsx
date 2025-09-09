"use client"

import Image from "next/image"
import React from "react"
const ApplyForms = () => {
    React.useEffect(() => {
        const fuc = async () => {
            const res = await fetch("/api/test", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({testbody: "xjxjxjdkkd"})
            })
            console.log(res)
            const data = await res.json(); // <-- вот здесь преобразование
            console.log(data);
        }

        fuc()
    }, [])
    const [emailInput, setEmailInput] = React.useState<string>("")
    return (
        <>
            <div>
                <h2 className="text-center text-4xl font-medium mb-14">Interesting?</h2>
                <form className="flex justify-center">
                    <div className="flex flex-col ">
                        <label htmlFor="email">Email:</label>
                        <div className="flex items-center">
                            <input
                                className="focus:outline-0 border border-gray-100 h-16 text-xl mr-12  min-w-[450px] pl-2"
                                type="email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                name="email"
                                id="email"
                                alt="email"
                            />
                            <button className="p-4 cursor-pointer text-2xl font-medium bg-orange text-white">Contact Me!</button>
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