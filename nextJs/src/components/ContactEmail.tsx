import React from "react"

interface IContactEmailProps {
    token: string
}

const ContactEmail: React.FC<IContactEmailProps> = ({token}) => {
    const [emailInput, setEmailInput] = React.useState<string>("")

    const emailForContacting = async (email: string, token: string) => {
        setEmailInput("")
        const res = await fetch("/api/contact-email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, token })
        })
        const reqjson = await res.json()
    }
    return (
        <>
            <h2 className="text-center text-4xl font-bold mb-14">Interesting?</h2>
            <form className="flex justify-center">
                <div className="flex flex-col ">
                    <label htmlFor="email">Email:</label>
                    <div className="flex items-center xm:max-sm:flex-col">
                        <input
                            className="input-text mr-12 grow sm:max-md:mr-8 xs:max-md:min-w-[350px]! xm:max-xs:min-w-[320px]! xm:max-sm:mb-4 xm:max-sm:mr-0  
                            "
                            type="email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            name="email"
                            id="email"
                            alt="email"
                        />
                        <button
                            onClick={(e) => { e.preventDefault(); emailForContacting(emailInput, token) }}
                            onSubmit={(e) => {
                                e.preventDefault()
                            }}
                            className="p-4 cursor-pointer text-2xl font-medium button "
                        >
                            Contact Me!
                        </button>
                        <div
                            className="g-recaptcha"
                            data-sitekey="6Lca5OErAAAAAA1r3dfFVQWTMd5x2tohlMDRcjJw"
                            data-size="invisible"
                        ></div>
                    </div>
                </div>
            </form>
            <div className="mb-12">

            </div>
            <div className="relative">
                <span className="h-0.5 w-[40%] absolute top-[calc(50%-1px)] left-0 bg-gray-100 "></span>
                <span className="h-0.5 w-[40%] absolute top-[calc(50%-1px)] right-0 bg-gray-100"></span>
                <h3 className="text-2xl font-medium text-center mb-12 relative">Or...</h3>
            </div>

        </>
    )
}

export default ContactEmail