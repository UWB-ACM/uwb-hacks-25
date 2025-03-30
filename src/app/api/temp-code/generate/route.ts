// src/app/api/temp-code/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { addCode, removeCode } from '@/src/util/tempCode';
import { CheckInInfo } from '@/src/util/dataTypes';

export async function POST(req: NextRequest) : Promise<NextResponse<{code: string}>> {
    const body : CheckInInfo = await req.json();

    console.log("body", body)

    //if the old code is not null, remove it from the database
    if (body.currentCode !== "undefined") {
        await removeCode(body.currentCode);
    }

    const code = await addCode(body.duration, body);
    
    return NextResponse.json({ code });
}
