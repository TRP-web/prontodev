import sendMail from "@/app/scripts/sendMail"
import { email } from "@/app/scripts/sendMail";


export async function POST(req: Request) {
  try {
    const data = await req.json()
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const res = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.CAPTCHA_SERVER}&response=${data.token}`,
    });

    const verifyData = await res.json()
    console.log(verifyData.success, data.email)
    if (verifyData.success && data.email != "") {
      console.log(verifyData.success)
      await sendMail(
        process.env.REQUEST_EMAIL!,
        `Contact request from <strong>${data.email}</strong>`,
        "Thank you — we received your request"
      )
      const info = await sendMail(
        data.email,
        email
      )
      return Response.json({ info: "info" })
    } else Response.json({ success: false }, { status: 500 })

  } catch (e) {
    return Response.json({ success: false, errorInfo: e }, { status: 500 })
  }
}