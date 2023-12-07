import { createClient } from "@/db/clientForm"

export async function GET() {
    return Response.json({ data: "data" })
}

export async function POST(request: Request) {
    const res = await request.json()
    const data = await createClient(
        res
    )
    return Response.json({data})
}