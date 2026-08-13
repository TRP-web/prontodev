import React from "react"
import Image, { type StaticImageData } from "next/image"
import buissnesImprovingImage from "@/public/quiz-images/bord.png"
import processImprovingImage from "@/public/quiz-images/process.png"
import budgetImage from "@/public/quiz-images/budget.png"
import contactCourierImage from "@/public/quiz-images/quiz2.png"

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

interface IQuestionLayoutProps {
    active: boolean
    children: React.ReactNode
    image: StaticImageData
    imageAlt: string
    imageClassName?: string
}

const TOTAL_STEPS = 4

const selectClassName =
    "h-12 w-full cursor-pointer rounded-[7px] border border-[#9bb8db] bg-white px-3 text-base text-[#162340] transition focus:border-[#2d5a98] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/15"

const inputClassName =
    "h-11 w-full rounded-[7px] border border-[#9bb8db] bg-white px-3 text-base text-[#162340] placeholder:text-[#a8b4c6] transition focus:border-[#2d5a98] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/15"

const QuestionLayout: React.FC<IQuestionLayoutProps> = ({
    active,
    children,
    image,
    imageAlt,
}) => (
    <div className={active ? "grid min-h-[390px] md:grid-cols-[1.08fr_0.92fr]" : "hidden"}>
        <div className="flex flex-col justify-center px-6 py-9 sm:px-10 md:py-12">
            {children}
        </div>
        <div className="relative min-h-[280px] overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#fff_0%,#f7e9ff_42%,#dce6ff_100%)] md:min-h-full">
            <Image
                alt={imageAlt}
                src={image}
                sizes="(max-width: 767px) 100vw, 420px"
                className={"w-full"}
            />
        </div>
    </div>
)

const Quiz: React.FC<IQuizProps> = ({ token, setFinished }) => {
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
            error: false,
        },
        phone: {
            value: "",
            message: "",
            error: false,
        },
        other: {
            value: "",
            message: "",
            error: false,
        },
    })

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>, object: keyof IQuizData) => {
        const newData = { ...quizData }
        newData[object] = e.target.value
        setQuizData(newData)
    }

    const nextButtonHandler = (e: React.MouseEvent<HTMLButtonElement>, object: keyof IQuizData) => {
        e.preventDefault()
        if (quizData[object] !== "None") {
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
            const field = key as keyof IQuizContactData
            const newQuizDataContact = { ...quizDataContact }
            newQuizDataContact[field].error = false
            newQuizDataContact[field].message = ""
            setQuizDataContact(newQuizDataContact)
        }
        const res = await fetch("/api/contact-quiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                buissnes: quizData.buissnes,
                process: quizData.process,
                budget: quizData.budget,
                email: quizDataContact.email.value,
                phone: quizDataContact.phone.value,
                other: quizDataContact.other.value,
                token: token,
            }),
        })
        const data: { validate: boolean; input: keyof IQuizContactData; success?: boolean } = await res.json()
        if (!data.validate) {
            if (data.input) {
                const newQuizDataContact = { ...quizDataContact }
                newQuizDataContact[data.input].error = true
                setQuizDataContact(newQuizDataContact)
            }
        } else if (data.success) {
            setFinished(true)
        }
    }

    const progress = progressBarCounting(TOTAL_STEPS, activeQuestion)

    return (
        <div className="mx-auto mb-12 max-w-[920px]">
            <form
                action="#"
                className="overflow-hidden rounded-[16px] border border-[#dbe5f1] bg-[#f5f7fa] shadow-[0_14px_40px_rgba(45,90,152,0.10)]"
            >
                <div className="relative h-9 bg-white/70 px-6 pt-4">
                    <div
                        className="h-[7px] overflow-hidden rounded-full bg-[#dce7f5]"
                        role="progressbar"
                        aria-label="Quiz progress"
                        aria-valuemin={1}
                        aria-valuemax={TOTAL_STEPS}
                        aria-valuenow={activeQuestion}
                    >
                        <div
                            style={{ width: progress }}
                            className="h-full rounded-full bg-[linear-gradient(90deg,#e65bb6_0%,#8658c9_52%,#2d5a98_100%)] transition-[width] duration-300"
                        />
                    </div>
                    <span className="absolute right-7 top-[14px] rounded-full bg-[#7182a7] px-2 py-px text-[9px] font-bold leading-none text-white">
                        {progress}
                    </span>
                </div>

                <QuestionLayout
                    active={activeQuestion === 1}
                    image={contactCourierImage}
                    imageAlt="Business growth chart"
                >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7182a7]">Step 01</p>
                    <label htmlFor="business-area" className="mb-6 block text-[clamp(1.35rem,3vw,1.8rem)] font-bold leading-tight text-[#2d5a98]">
                        What is your buissnes area for improving?
                    </label>
                    <select
                        name="buissnes"
                        id="business-area"
                        value={quizData.buissnes}
                        onChange={(e) => changeValue(e, "buissnes")}
                        className={selectClassName}
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
                        type="button"
                        onClick={(e) => nextButtonHandler(e, "buissnes")}
                        className="mt-5 self-start rounded-[5px] bg-[#2d5a98] px-6 py-2.5 text-base font-bold text-white transition hover:bg-[#244b82] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/30"
                    >
                        Next
                    </button>
                </QuestionLayout>

                <QuestionLayout
                    active={activeQuestion === 2}
                    image={contactCourierImage}
                    imageAlt="Process improvement illustration"
                >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7182a7]">Step 02</p>
                    <label htmlFor="process-area" className="mb-6 block text-[clamp(1.35rem,3vw,1.8rem)] font-bold leading-tight text-[#2d5a98]">
                        What is your process area for improving?
                    </label>
                    <select
                        name="process"
                        id="process-area"
                        value={quizData.process}
                        onChange={(e) => changeValue(e, "process")}
                        className={selectClassName}
                    >
                        <option value="None">None</option>
                        <option value="Data collection">Data collection</option>
                        <option value="Data processing or editing">Data processing or editing</option>
                        <option value="Communication">Communication</option>
                        <option value="Client service">Client service</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        type="button"
                        onClick={(e) => nextButtonHandler(e, "process")}
                        className="mt-5 self-start rounded-[5px] bg-[#2d5a98] px-6 py-2.5 text-base font-bold text-white transition hover:bg-[#244b82] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/30"
                    >
                        Next
                    </button>
                </QuestionLayout>

                <QuestionLayout
                    active={activeQuestion === 3}
                    image={contactCourierImage}
                    imageAlt="Project budget illustration"
                >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7182a7]">Step 03</p>
                    <label htmlFor="budget" className="mb-6 block text-[clamp(1.35rem,3vw,1.8rem)] font-bold leading-tight text-[#2d5a98]">
                        Expecting budget
                    </label>
                    <select
                        name="budget"
                        id="budget"
                        value={quizData.budget}
                        onChange={(e) => changeValue(e, "budget")}
                        className={selectClassName}
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
                        type="button"
                        onClick={(e) => nextButtonHandler(e, "budget")}
                        className="mt-5 self-start rounded-[5px] bg-[#2d5a98] px-6 py-2.5 text-base font-bold text-white transition hover:bg-[#244b82] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/30"
                    >
                        Next
                    </button>
                </QuestionLayout>

                <QuestionLayout
                    active={activeQuestion === 4}
                    image={contactCourierImage}
                    imageAlt="Courier carrying an envelope"
                    imageClassName="object-cover"
                >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7182a7]">Step 04</p>
                    <h3 className="mb-5 text-[clamp(1.35rem,3vw,1.8rem)] font-bold leading-tight text-[#2d5a98]">
                        We will contact you!
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#2d5a98]" htmlFor="quiz-email">
                                Email:
                            </label>
                            <input
                                type="text"
                                id="quiz-email"
                                className={`${inputClassName} ${quizDataContact.email.error ? "!border-red-600 !ring-red-600/15" : ""}`}
                                placeholder="Your email address..."
                                value={quizDataContact.email.value}
                                onChange={(e) => contactDataHandler(e, "email")}
                                aria-invalid={quizDataContact.email.error}
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#2d5a98]" htmlFor="quiz-phone">
                                Phone:
                            </label>
                            <input
                                type="tel"
                                id="quiz-phone"
                                className={`${inputClassName} ${quizDataContact.phone.error ? "!border-red-600 !ring-red-600/15" : ""}`}
                                placeholder="+1 123-456-7891"
                                value={quizDataContact.phone.value}
                                onChange={(e) => contactDataHandler(e, "phone")}
                                aria-invalid={quizDataContact.phone.error}
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#2d5a98]" htmlFor="quiz-other">
                                Other contacts:
                            </label>
                            <input
                                type="text"
                                className={`${inputClassName} ${quizDataContact.other.error ? "!border-red-600 !ring-red-600/15" : ""}`}
                                id="quiz-other"
                                value={quizDataContact.other.value}
                                onChange={(e) => contactDataHandler(e, "other")}
                                aria-invalid={quizDataContact.other.error}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={(e) => submitHandler(e)}
                        className="mt-5 self-start rounded-[5px] bg-[#2d5a98] px-6 py-2.5 text-base font-bold text-white transition hover:bg-[#244b82] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/30"
                    >
                        Submit!
                    </button>
                </QuestionLayout>
            </form>
        </div>
    )
}

export default Quiz
