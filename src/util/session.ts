import { cookies } from "next/headers";
import { buildKey, redis } from "@/src/util/redis";
import { NextRequest, NextResponse } from "next/server";

/**
 * The time that a session should last for, in seconds.
 */
const sessionTimeSeconds = 7 * 24 * 60 * 60;

/**
 * The data associated with a user's session.
 *
 * This is just a regular object, and changes to
 * it won't persist across requests.
 * To save a modification to it, use saveSession.
 */
export interface Session {
    /**
     * The ID of the user in the database (if they're authenticated).
     */
    userId?: string;
}

/**
 * Gets the user's session.
 * If it can't be loaded for some reason, this returns
 * an empty session.
 */
export async function getSession(): Promise<Session> {
    const cookieStore = await cookies();

    const cookie = cookieStore.get("session-uwbh25");
    if (!cookie?.value) {
        return {};
    }

    // We have a session ID, so try to read the data for it.
    const data = await redis.get(buildKey("session"));
    if (!data || typeof data !== "string") {
        return {};
    }

    try {
        return JSON.parse(data) as Session;
    } catch (e) {
        // The JSON should be valid, but if it isn't,
        // it's better to clear the user's session than
        // to give them an error page.
        console.error(e);
        return {};
    }
}

/**
 * Ensures that a request/response has a session
 */
export async function ensureSession(req: NextRequest, res: NextResponse) {
    const cookie = req.cookies.get("session-uwbh25");

    // If we have a cookie, ensure that it points to a valid session.
    // Otherwise, create a new one.
    if (cookie?.value) {
        // On routes that use session (almost all of them), this
        // will probably lead to extra unneeded redis fetches.
        // Apparently NextJS doesn't support sessions very well.
        // The only real solution is to create a fake session-data
        // header that gets passed on to later code, but I'm not sure
        // if there are security concerns with that, and it just
        // feels like a poor solution overall.
        if (await redis.exists(buildKey("session", cookie.value))) return;
    }

    const newSessionId = crypto.randomUUID();

    // Save an empty session.
    await redis.set(buildKey("session", newSessionId), "{}", {
        ex: sessionTimeSeconds,
    });

    // Dates are in milliseconds
    const expiresAt = new Date(Date.now() + sessionTimeSeconds * 1000);

    res.cookies.set({
        name: "session-uwbh25",
        value: newSessionId,
        expires: expiresAt,
    });

    // Also set the request header so that any server
    // side code has the right session ID.
    req.cookies.set({
        name: "session-uwbh25",
        value: newSessionId,
    });
}

/**
 * Saves the new session data.
 * This can only be used in server actions or API routes.
 *
 * @param data - is the new session data to save.
 */
export async function saveSession(data: Session): Promise<void> {
    const cookieStore = await cookies();

    const cookie = cookieStore.get("session-uwbh25");
    if (!cookie?.value) {
        // This shouldn't happen, since every user should
        // have a session.
        // We could try to create a new session for them, but
        // this indicates a deeper issue and doing so will only
        // lead to confusion.
        // This function isn't used for displaying the site itself,
        // rather providing interactive functionality, so erroring here
        // will still allow most of the site to function.
        throw new Error(
            "Tried to save session data without a valid session cookie!",
        );
    }

    await redis.set(buildKey("session", cookie.value), JSON.stringify(data), {
        ex: sessionTimeSeconds,
    });
}
