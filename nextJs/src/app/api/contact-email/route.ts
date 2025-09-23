import sendMail from "@/app/scripts/sendMail"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    await sendMail(
      process.env.REQUEST_EMAIL!, 
      `Contact request from <strong>${data.email}</strong>`)
    const info = await sendMail(
      data.email, 
      "Thank you for contact request! We will contact you as soon as possible!"
    )
    return Response.json({ info })
  } catch (e) {
    return Response.json({error: "error", errorInfo:e}, {status:500})
  }
}