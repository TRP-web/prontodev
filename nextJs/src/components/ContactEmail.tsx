import React from "react"
import Image from "next/image"
import contactCourierImage from "@/public/quiz-images/contact-courier.png"

interface IContactEmailProps {
    token: string
    setFinished: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactEmail: React.FC<IContactEmailProps> = ({ token, setFinished }) => {
    const [emailInput, setEmailInput] = React.useState<string>("")

    const emailForContacting = async (email: string, recaptchaToken: string) => {
        setEmailInput("")
        const res = await fetch("/api/contact-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, token: recaptchaToken }),
        })
        const resjson = await res.json()
        setFinished(resjson.success)
        console.log(resjson)
    }

    return (
        <div className="mx-auto max-w-[920px]">
            <h2 className="mb-10 text-center text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-[#162340]">
                Interesting?
            </h2>

            <div className="grid overflow-hidden rounded-[16px] border border-[#dbe5f1] bg-[#f5f7fa] shadow-[0_14px_40px_rgba(45,90,152,0.10)] md:grid-cols-[1.08fr_0.92fr]">
                <form
                    className="flex min-h-[330px] flex-col justify-center px-6 py-9 sm:px-10 md:py-12"
                    onSubmit={(e) => {
                        e.preventDefault()
                        emailForContacting(emailInput, token)
                    }}
                >
                    <h3 className="mb-3 text-center text-[clamp(1.4rem,3vw,1.85rem)] font-bold text-[#2d5a98] md:text-left">
                        Contact Us
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#66738a]">
                        Leave your email and we&apos;ll get in touch to discuss your project.
                    </p>
                    <label className="mb-1 block text-sm font-medium text-[#2d5a98]" htmlFor="contact-email">
                        Email:
                    </label>
                    <input
                        className="h-11 w-full rounded-[7px] border border-[#9bb8db] bg-white px-3 text-base text-[#162340] placeholder:text-[#a8b4c6] focus:border-[#2d5a98] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/15"
                        type="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        name="email"
                        id="contact-email"
                        placeholder="Your email address..."
                    />
                    <button
                        type="submit"
                        className="mt-5 self-start rounded-[5px] bg-[#2d5a98] px-6 py-2.5 text-base font-bold text-white transition hover:bg-[#244b82] focus:outline-none focus:ring-2 focus:ring-[#2d5a98]/30"
                    >
                        Contact Me!
                    </button>
                    <div
                        className="g-recaptcha"
                        data-sitekey="6Lca5OErAAAAAA1r3dfFVQWTMd5x2tohlMDRcjJw"
                        data-size="invisible"
                    />
                </form>

                <div className="relative min-h-[290px] overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#fff_0%,#f7e9ff_42%,#dce6ff_100%)] md:min-h-full">
                    <Image
                        src={contactCourierImage}
                        alt="Courier carrying an envelope"
                        fill
                        sizes="(max-width: 767px) 100vw, 420px"
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="relative py-12 text-center">
                <span className="absolute left-0 top-1/2 h-px w-[35%] bg-[#cddcec]" aria-hidden="true" />
                <span className="absolute right-0 top-1/2 h-px w-[35%] bg-[#cddcec]" aria-hidden="true" />
                <h3 className="relative inline-block bg-[#f7fafc] px-5 text-lg font-bold uppercase leading-tight text-[#2d5a98]">
                    Or...
                    <span className="mt-1 block normal-case">We will contact you!</span>
                </h3>
            </div>
        </div>
    )
}

export default ContactEmail
