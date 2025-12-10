import sendMail, { email } from "@/app/scripts/sendMail"
import { allowOrigin } from "../allowOrigin";

export async function POST(req: Request) {
    try {// email validation.. later after the start
        const origin = allowOrigin(req);
        if (origin instanceof Response) return origin;
        const data = await req.json()
        console.log(data)
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

        const res = await fetch(verifyUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${process.env.CAPTCHA_SERVER}&response=${data.token}`,
        });

        const verifyData = await res.json()
        console.log(verifyData)
        if (verifyData.success) {
            for (const key in data) {
                if (key == "email" || key == "phone") {
                    if (data[key] == "") {
                        return Response.json(
                            {
                                validate: false,
                                input: key,
                                messsage: "empty value"
                            },
                            { status: 500 }
                        )
                    }
                }
            }
        } else {
            return Response.json(
                {
                    messsage: "empty value",
                    validate: false
                },
                { status: 500 }
            )
        }


        await sendMail(process.env.REQUEST_EMAIL!,
            `<h1>New quiz request !</h1> 
            <h2> Contact information:</h2>
            buissnes: <strong>${data.buissnes}</strong></br>
            process: <strong>${data.process}</strong></br>
            budget: <strong>${data.budget}</strong></br>
            email: <strong>${data.email}</strong></br>
            phone: <strong>${data.phone}</strong></br>
            other: <strong>${data.other}</strong></br>
            `
        )
        await sendMail(data.email,
            email
        )
        return Response.json({ success: true, validate: true })
    } catch (e) {
        console.log(e)
    }
}