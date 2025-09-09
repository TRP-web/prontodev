
export async function POST(req: Request ) {
  const body = await req.json()
  console.log(body)
  return Response.json({ message: "Привет из API (POST)", });
}

сделать api для отправке емейлов
https://resend.com/docs/send-with-nextjs

позже сделать отправку мейлов с воего доменна... хз как