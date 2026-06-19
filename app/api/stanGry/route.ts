import { NextRequest, NextResponse } from "next/server";

let aktualnyEtap = {
    etap: "oczekiwanie",
    index: -1
}

export async function GET() {
    return NextResponse.json({ status: 200, body: aktualnyEtap });
}

export async function POST(req: NextRequest) {
    const { etap, index } = await req.json();
    aktualnyEtap = { etap, index };
    return NextResponse.json({ success: true });
}