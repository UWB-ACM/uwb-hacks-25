// src/app/api/temp-code/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { codeExists } from '@/src/util/tempCode';

export async function POST(req: NextRequest) : Promise<NextResponse<{valid: boolean}>> {
    const { code } = await req.json();

    // TODO there is a small chance a user will guess another 6 digit code that exists on the redis database
    const valid = await codeExists(code); 

    return NextResponse.json({ valid });
}
