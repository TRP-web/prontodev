
export async function POST(req: Request ) {
  const body = await req.json()
  console.log(body)
  return Response.json({ message: "Привет из API (POST)", });
}


// позже сделать отправку мейлов с воего доменна... хз как