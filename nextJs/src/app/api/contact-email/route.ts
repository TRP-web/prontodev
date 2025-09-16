import nodemailer from "nodemailer"


export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "prontodev.emails@gmail.com",
        pass: process.env.EMAIL_PASSWORD    
        
      }
    })

    const sendMail = () => {
      return new Promise((resolve, reject) => {
        transporter.sendMail({
          from: "prontodev.emails@gmail.com",
          to: data.email, 
          subject: "Contact request!",
          html: `Thank you for contact request! We will contact you as soon as possible!`
        }, (error, info) => {
          if (error) {
            reject(error)
          }
          resolve(info)
        })
      })
    }
    const info = await sendMail()
    return Response.json({ info })
  } catch (e) {
    return Response.json({error: "error", errorInfo:e}, {status:500})
  }
}