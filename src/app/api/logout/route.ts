import { NextResponse } from "next/server";
import { logoutUser } from "@/src/util/logout";

export async function POST() {
  await logoutUser();
  return NextResponse.json({ success: true });
}
