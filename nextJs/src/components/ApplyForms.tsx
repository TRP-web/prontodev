// @ts-nocheck

"use client"
import React from "react"
import Quiz from "./Quiz"
import ContactEmail from "./ContactEmail"
const ApplyForms = () => {
    const [token, setToken] = React.useState<string>("")

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
                    console.log("test")
            })
        }, 1000 * 60 * 1.8)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <>
            <div id="apply-forms">
                <ContactEmail token={token} />
                <Quiz token={token} />
            </div>
        </>
    )
}

export default ApplyForms