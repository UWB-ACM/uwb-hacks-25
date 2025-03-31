// src/app/api/temp-code/route.ts
import { NextRequest, NextResponse } from "next/server";
import { addCode, removeCode } from "@/src/util/tempCode";
import { CheckInInfo } from "@/src/util/dataTypes";
import { ensureStaffPermission } from "@/src/util/staff";
import { getSession } from "@/src/util/session";

export async function POST(
    req: NextRequest,
): Promise<NextResponse<{ code: string }>> {
    const body: CheckInInfo = await req.json();

    const session = await getSession();
    await ensureStaffPermission(session);

    // If the old code is not null, remove it from the database
    if (body.currentCode != null) {
        await removeCode(body.currentCode);
    }

    const code = await addCode(body.duration, body);

    return NextResponse.json({ code });
}
