import { NextResponse } from "next/server";
import { googleAuth } from "@/src/util/auth";
import { getSession, saveSession } from "@/src/util/session";

export async function GET() {
  try {
    // State is used to ensure that we fully
    // control the parameters of the google auth
    // URL, and if the state generated here doesn't
    // match the state received at the callback, we'll
    // reject the request.
    const state = crypto.randomUUID();

    const session = await getSession();
    session.googleState = state;
    await saveSession(session);

    const client = googleAuth();

    const authorizeUrl = client.generateAuthUrl({
      access_type: "offline",
      scope: ["profile", "email", "openid"],
      include_granted_scopes: true,
      state,
    });

    return NextResponse.redirect(authorizeUrl);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}
