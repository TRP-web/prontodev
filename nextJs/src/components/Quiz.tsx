import React from "react"
import Image from "next/image"
import buissnesImprovingImage from "@/public/quiz-images/bord.png"
import processImprovingImage from "@/public/quiz-images/process.png"
import budgetImage from "@/public/quiz-images/budget.png"

interface IQuizProps {
    token: string
    setFinished: React.Dispatch<React.SetStateAction<boolean>>
}

interface IQuizObject {
    value: string
    error: boolean
    message: string
}

interface IQuizData {
    buissnes: string
    process: string
    budget: string

}
interface IQuizContactData {
    email: IQuizObject
    phone: IQuizObject
    other: IQuizObject
}

const Quiz: React.FC<IQuizProps> = ({ token, setFinished }) => {
    // получить токен или сделать свой и сделать капчу в апи
    const [activeQuestion, setActiveQuestion] = React.useState<number>(1)
    const [quizData, setQuizData] = React.useState<IQuizData>({
        buissnes: "None",
        process: "None",
        budget: "None",
    })
    const [quizDataContact, setQuizDataContact] = React.useState<IQuizContactData>({
        email: {
            value: "",
            message: "",
            error: false
        },
        phone: {
            value: "",
            message: "",
            error: false
        },
        other: {
            value: "",
            message: "",
            error: false
        },
    })
    // progress bar handler and validation error vieving
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
    const contactDataHandler = (e: React.ChangeEvent<HTMLInputElement>, object: keyof IQuizContactData) => {
        const newQuizDataContact = { ...quizDataContact }
        newQuizDataContact[object].value = e.target.value
        setQuizDataContact(newQuizDataContact)
    }
    const progressBarCounting = (maxSlides: number, currentSlide: number): string => {
        return `${(currentSlide / maxSlides) * 100}%`
    }

    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        for (const key in quizDataContact) {
            const field = key as keyof IQuizContactData;
            const newQuizDataContact = { ...quizDataContact }
            newQuizDataContact[field].error = false
            newQuizDataContact[field].message = ""
            setQuizDataContact(newQuizDataContact)
        }
        const res = await fetch("/api/contact-quiz", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                buissnes: quizData.buissnes,
                process: quizData.process,
                budget: quizData.budget,
                email: quizDataContact.email.value,
                phone: quizDataContact.phone.value,
                other: quizDataContact.other.value,
                token: token
            })
        })
        const data: { validate: boolean, input: keyof IQuizContactData, success?: boolean } = await res.json()
        if (!data.validate) {
            if (data.input) {
                const newQuizDataContact = { ...quizDataContact }
                newQuizDataContact[data.input].error = true
                setQuizDataContact(newQuizDataContact)
            }
        } else {
            if (data.success) {
                setFinished(true)
            }
        }
    }
    return (
        //progress bar
        <div className="max-w-[780px] m-auto mb-40 ">
            <div className="relative pt-12">
                <div className="w-full h-5 bg-gray-200 rounded-[12px] left-0 top-0 absolute"></div>
                <div
                    style={{
                        width: progressBarCounting(5, activeQuestion)
                    }}
                    className="h-5 left-0 top-0 bg-purple-600 rounded-[12px] absolute duration-150 z-10"
                >
                    <div className="text-white absolute right-1 bottom-[-2px]">
                        {progressBarCounting(5, activeQuestion)}
                    </div>
                </div>
            </div>
            <form action="#">
                <div className={`${activeQuestion == 1 ? "" : "hidden"} `}>{/* slide */}
                    <Image
                        alt="slide image"
                        height={200}
                        width={300}
                        src={buissnesImprovingImage.src}
                        className="mb-5"
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
                    {/* some information for each slide*/}
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
                        src={processImprovingImage.src}
                        className="mb-5"

                    />
                    <label className="text-2xl block mb-3 ">What is your process area for improving?</label>
                    <select
                        name="process"
                        className="px-3 cursor-pointer text-xl mr-5 border-gray-200 border rounded-[6px] h-12 focus:outline-none"
                        id="area"
                        onChange={(e) => changeValue(e, "process")}
                    >
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
                <div className={`${activeQuestion == 3 ? "" : "hidden"} `}>{/* slide */}
                    <Image
                        alt="slide image"
                        height={200}
                        width={300}
                        src={budgetImage.src}
                        className="mb-5"

                    />
                    <label className="text-2xl block mb-3 ">Expecting budget</label>
                    <select
                        name="budget"
                        className="px-3 cursor-pointer text-xl mr-5 border-gray-200 border rounded-[6px] h-12 focus:outline-none"
                        id="area"
                        onChange={(e) => changeValue(e, "budget")}
                    >
                        <option value="None">None</option>
                        <option value="Up to 500">Up to 500 USD</option>
                        <option value="Up to 1000">Up to 1000 USD</option>
                        <option value="Up to 3000">Up to 3000 USD</option>
                        <option value="Up to 5000">Up to 5000 USD</option>
                        <option value="Up to 10000">Up to 10000 USD</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        onSubmit={(e) => e.preventDefault()}
                        onClick={(e) => nextButtonHandler(e, "budget")}
                        className="button py-2 px-2 font-medium text-2xl rounded-[6px]"
                    >Next</button>
                </div>
                <div className={`${activeQuestion == 4 ? "" : "hidden"} `}>{/* slide */}
                    {/* <Image
                        alt="slide image"
                        height={200}
                        width={300}
                        src={""}
                    /> */}
                    <div className="max-w-[450px]">
                        <label className="text-2xl block mb-3">We will contact you!</label>
                        <label className="block" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            className={`input-text mb-4 xs:max-md:min-w-[350px]! xm:max-xs:min-w-[320px]! ${quizDataContact.email.error ? "!border-red-600 " : ""}`}
                            placeholder="Your email address..."
                            value={quizDataContact.email.value}
                            onChange={(e) => contactDataHandler(e, "email")}
                        />
                        <label className="block" htmlFor="phone">
                            Phone:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className={`input-text mb-4 xs:max-md:min-w-[350px]! xm:max-xs:min-w-[320px]! ${quizDataContact.phone.error ? "!border-red-600" : ""}`}
                            placeholder="+1 123-456-7891"
                            value={quizDataContact.phone.value}
                            onChange={(e) => contactDataHandler(e, "phone")}

                        />
                        <label className="block" htmlFor="other">
                            Other contacts:
                        </label>
                        <input
                            type="text"
                            className={`input-text mb-4 xs:max-md:min-w-[350px]! xm:max-xs:min-w-[320px]! ${quizDataContact.other.error ? "!border-red-600" : ""}`}
                            id="other"
                            value={quizDataContact.other.value}
                            onChange={(e) => contactDataHandler(e, "other")}

                        />

                        <button
                            onClick={(e) => submitHandler(e)}
                            onSubmit={(e) => e.preventDefault()}
                            className="block button py-3 px-3 font-medium text-2xl rounded-[6px] ml-auto xm:max-md:ml-0"
                        >Submit!</button>
                    </div>

                </div>
                <div className={`${activeQuestion == 5 ? "" : "hidden"} `}>{/* slide */}
                    {/* <Image
                        alt="slide image"
                        height={200}
                        width={300}
                        src={""}
                    /> */}
                    
                </div>
            </form>
        </div>
    )
}

export default Quiz