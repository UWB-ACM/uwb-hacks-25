// src/app/api/temp-code/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { addCode, removeCode } from '@/src/util/tempCode';
import { buildKey } from '@/src/util/redis';
import { codeExists } from '@/src/util/tempCode';

export async function GET(req: NextRequest) : Promise<NextResponse<{valid: boolean}>> {
    const { key } = await req.json();

    let valid = false

    const res = await codeExists(buildKey(currentCode, duration.toString())); 

    if(res && ) {
    }

    return NextResponse.json({ valid });
}
