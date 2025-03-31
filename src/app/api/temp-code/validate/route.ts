// src/app/api/temp-code/route.ts
import { NextRequest, NextResponse } from "next/server";
import { codeExists } from "@/src/util/tempCode";

export async function POST(
    req: NextRequest,
): Promise<NextResponse<{ valid: boolean }>> {
    const { code } = await req.json();

    /**
     *  There is a small chance a user will guess another 6 digit code that exists on the redis database
     *  Although only a single event happens at a time and only 1 staff member will make a checkin code at once.
     *  The chances of guessing the code is 1 / 1,000,000. We should be good.
     */
    const valid = await codeExists(code);

    return NextResponse.json({ valid });
}
