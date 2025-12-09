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
            <div id="apply-forms">
                {
                    finished ?
                        <div className="max-w-[780px] m-auto text-2xl text-center mb-12 bg-purple-600 text-white p-2">
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