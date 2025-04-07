import { NextResponse } from "next/server";
import { googleAuth } from "@/src/util/auth";
import { getSession, saveSession } from "@/src/util/session";
import { headers } from "next/headers";

export async function GET() {
    try {
        // For a better user experience, keep track of the previous
        // page and take the user back to it after sign in.
        // For security, this only works if the previous page
        // is from this site.
        const prevPage = (await headers()).get("Referer");

        let redirectAfter = null;
        if (prevPage != null) {
            const prevPageURL = new URL(prevPage);

            const allowedOrigin =
                process.env.NODE_ENV === "production"
                    ? "https://uwbhacks.com"
                    : "http://localhost:3000";
            if (prevPageURL.origin === allowedOrigin) {
                redirectAfter = prevPageURL.pathname;
            }
        }

        // State is used to ensure that we fully
        // control the parameters of the google auth
        // URL, and if the state generated here doesn't
        // match the state received at the callback, we'll
        // reject the request.
        const state = crypto.randomUUID();

        const session = await getSession();

        session.googleState = state;
        if (redirectAfter) session.redirectAfter = redirectAfter;

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
