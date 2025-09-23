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

    export default sendMail