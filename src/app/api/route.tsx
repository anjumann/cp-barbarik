import { createClient, getClient } from "@/db/clientForm"
import { Company } from "@/types"

export async function GET() {
    const data = await getClient() as Company[]
    return Response.json({ data })
}

export async function POST(request: Request) {
    const res = await request.json()
    const data = await createClient(
        res
    )
    return Response.json({data})
}