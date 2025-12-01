
import logo from "@/public/weblogo/logomain.png"
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prontodev.emails@gmail.com",
    pass: process.env.EMAIL_PASSWORD
  }
})

const sendMail = (receiver: string, message: string, subject?: string) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      from: "prontodev.emails@gmail.com",
      to: receiver,
      subject: subject ? subject : "Contact request!",
      html: message
    }, (error, info) => {
      if (error) {
        reject(error)
      }
      resolve(info)
    })
  })
}


export const email = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thank You for Reaching Out</title>
</head>
<body style="margin:0; padding:0; background-color:#f8fafc; font-family:Arial, Helvetica, sans-serif; color:#0f172a;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%;">
    <tr>
      <td align="center" style="padding:20px 12px;">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background:#ffffff; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.03); overflow:hidden;">
          
          <!-- HEADER -->
          <tr>
            <td style="padding:24px;">
              <img src="${logo.src}" alt="Pronto Dev" logo" style="width:140px; height:auto; display:block; border:0;">
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:0 24px 32px 24px;">
              <h1 style="font-size:22px; margin:0 0 12px; font-weight:700; color:#1e293b;">
                Thank you!
              </h1>

              <p style="font-size:15px; margin:0 0 12px; line-height:1.6; color:#475569;">
                We’ve received your contact request at <strong>Pronto Dev</strong> — and we truly appreciate you getting in touch.
              </p>

              <p style="font-size:15px; margin:0 0 20px; line-height:1.6; color:#475569;">
                Our team is already reviewing your message. One of our specialists will reach out to you within the next <strong>1–2 business days</strong> to discuss your needs and provide the best next steps.
              </p>

              <!-- CONTACT DETAILS -->
              <p style="font-size:14px; margin-top:28px; color:#64748b;">
                Need immediate help? Call us at <strong style="color:#1e293b;">+1 587-969-5446</strong> or simply reply to this email.
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#fafcfe; padding:20px 24px; font-size:13px; color:#94a3b8; line-height:1.5;">
              <p style="margin:0 0 6px; font-weight:600; color:#64748b;">Pronto Dev</p>
              <p style="margin:0;">
                You received this email because you submitted a contact request.  
                If this wasn’t you, you can safely ignore this message.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`

export default sendMail