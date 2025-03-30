// src/app/api/temp-code/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { addCode, removeCode } from '@/src/util/tempCode';
import { buildKey } from '@/src/util/redis';

export async function POST(req: NextRequest) : Promise<NextResponse<{key: string, timestamp: string}>> {
    const { duration, currentCode } = await req.json();

    //if the old code is not null, remove it from the database
    if (currentCode !== "null") {
        await removeCode(currentCode);
    }

    const [code, timestamp] = await addCode(duration);
    const key = buildKey(code, timestamp);

    return NextResponse.json({ key, timestamp });
}
