import React, { SelectHTMLAttributes } from "react"
import Image from "next/image"


interface IQuizData {
    buissnes: string
    process: string
}

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = React.useState<number>(1)
    const [quizData, setQuizData] = React.useState<IQuizData>({
        buissnes: "None",
        process: "None"
    })
    console.log(Object.keys(quizData).length)
    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>, object: keyof IQuizData) => {
        const newData = { ...quizData }
        newData[object] = e.target.value
        setQuizData(newData)
    }
    const nextButtonHandler = (e: React.MouseEvent<HTMLButtonElement>, object: keyof IQuizData) => {
        e.preventDefault()
        if (quizData[object] != "None") {
            setActiveQuestion(activeQuestion + 1)
        }
    }
    return (
        //progress bar
        <div className="max-w-[780px] m-auto mb-72">
            <form action="#">
                <div className={`${activeQuestion == 1 ? "" : "hidden"} `}>{/* slide */}
                    <Image
                        alt="slide image"
                        height={200}
                        width={300}
                        src={""}
                    />
                    <label className="text-2xl block mb-3">What is your buissnes area for improving?</label>
                    <select
                        name="buissnes"
                        id="area"
                        value={quizData.buissnes}
                        onChange={(e) => changeValue(e, "buissnes")}
                        className="px-3 cursor-pointer text-xl mr-5 border-gray-200 border rounded-[6px] h-12 focus:outline-none"
                    >
                        <option value="None">None</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Management">Management</option>
                        <option value="Sales">Sales</option>
                        <option value="Customer service">Customer service</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Production">Production</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        onSubmit={(e) => e.preventDefault()}
                        onClick={(e) => nextButtonHandler(e, "buissnes")}
                        className="button py-2 px-2 font-medium text-2xl rounded-[6px]"
                    >Next</button>

                </div>
                <div className={`${activeQuestion == 2 ? "" : "hidden"} `}>{/* slide */}
                    <Image
                        alt="slide image"
                        height={200}
                        width={300}
                        src={""}
                    />
                    <label className="text-2xl block mb-3 ">What is your process area for improving?</label>
                    <select name="process" className="px-3 cursor-pointer text-xl mr-5 border-gray-200 border rounded-[6px] h-12 focus:outline-none" id="area">
                        <option value="None">None</option>
                        <option value="Data collection">Data collection</option>
                        <option value="Data processing or editing">Data processing or editing</option>
                        <option value="Communication">Communication</option>
                        <option value="Client service">Client service</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        onSubmit={(e) => e.preventDefault()}
                        onClick={(e) => nextButtonHandler(e, "process")}
                        className="button py-2 px-2 font-medium text-2xl rounded-[6px]"
                    >Next</button>
                </div>
            </form>
        </div>
    )
}

export default Quiz