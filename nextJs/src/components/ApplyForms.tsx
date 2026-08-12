// @ts-nocheck

"use client"
import React from "react"
import Quiz from "./Quiz"
import ContactEmail from "./ContactEmail"
const ApplyForms = () => {
    const [token, setToken] = React.useState<string>("")
    const [finished, setFinished] = React.useState<boolean>(false)


    const handleLoaded = () => {
        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute("6Lca5OErAAAAAA1r3dfFVQWTMd5x2tohlMDRcjJw", { action: "homepage" })
                .then(async (token: string) => {
                    setToken(token)
                })
        })
    }

    React.useEffect(() => {
        // Add reCaptcha
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js?render=6Lca5OErAAAAAA1r3dfFVQWTMd5x2tohlMDRcjJw"
        script.addEventListener("load", handleLoaded)
        document.body.appendChild(script)
    }, [])
    React.useEffect(() => {
        const interval = setInterval(() => {
            window.grecaptcha.ready(() => {
                window.grecaptcha
                    .execute("6Lca5OErAAAAAA1r3dfFVQWTMd5x2tohlMDRcjJw", { action: "homepage" })
                    .then(async (token: string) => {
                        setToken(token)
                    })
            })
        }, 1000 * 60 * 1.8)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <>
            <div id="apply-forms" className="apply-forms-section px-4 py-16 sm:px-6 sm:py-24">
                {
                    finished ?
                        <div className="mx-auto max-w-[920px] rounded-[16px] bg-[#2d5a98] p-6 text-center text-2xl text-white shadow-[0_14px_40px_rgba(45,90,152,0.18)]">
                            <strong>We are 100% done! Thank you!</strong>
                        </div>
                        : <>
                            <ContactEmail
                                token={token}
                                setFinished={setFinished}
                            />
                            <Quiz
                                token={token}
                                setFinished={setFinished}
                            />
                        </>
                }

            </div>
        </>
    )
}

export default ApplyForms
