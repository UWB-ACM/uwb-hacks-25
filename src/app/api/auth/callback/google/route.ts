import { NextResponse } from "next/server";
import { google } from "googleapis";
import { googleAuth } from "@/src/util/auth";
import { getSession, saveSession } from "@/src/util/session";
import { createUser, getUserFromGoogle } from "@/src/util/db/user";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  if (error) {
    console.error("Error returned from Google OAuth2:", error);
    return new NextResponse(null, { status: 500 });
  }

  const session = await getSession();

  // Ensure that the state matches to verify that
  // we controlled this request.
  // This DOES NOT mean that the data is trusted
  // to be from google, although the API client
  // takes care of that.
  if (state !== session.googleState) {
    return new NextResponse(null, { status: 400 });
  }

  if (!code) {
    return new NextResponse(null, { status: 400 });
  }

  try {
    const client = googleAuth();
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    const oauth2 = google.oauth2({ version: "v2", auth: client });
    const { data } = await oauth2.userinfo.get();

    if (!data.verified_email || !data.email || !data.id || !data.name) {
      return new NextResponse(null, { status: 400 });
    }

    // Attempt to login, if the user is already signed up.
    // Otherwise, sign them up.
    const user =
      (await getUserFromGoogle(data.id)) ??
      (await createUser(data.id, data.name, data.email, data.picture || null));

    delete session.googleState;
    if (user) {
      session.user = {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
    }

    await saveSession(session);

    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}
