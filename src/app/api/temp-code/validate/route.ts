import { NextRequest, NextResponse } from "next/server";
import { getCodeData } from "@/src/util/tempCode";
import { checkInUser } from "@/src/util/db/checkIn";
import { getSession } from "@/src/util/session";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const { code } = await req.json();

    const session = await getSession();
    if (!session.user?.id) return NextResponse.redirect("/");

    /**
     *  There is a small chance a user will guess another 6 digit code that exists on the redis database
     *  Although only a single event happens at a time and only 1 staff member will make a checkin code at once.
     *  The chances of guessing the code is 1 / 1,000,000. We should be good.
     */
    const codeData = await getCodeData(code);
    if (codeData == null || codeData.event == null) {
        return NextResponse.json({ valid: false });
    }

    // This is idempotent and won't check in users multiple times.
    await checkInUser(session.user.id, codeData.event, codeData.authorized_by);

    return NextResponse.json({ valid: true });
}
