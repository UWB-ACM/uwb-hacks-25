"use server";

import { cookies } from "next/headers";
import { redis } from "@/src/util/redis";
import { buildKey } from "@/src/util/redis";
import { cookieName } from "@/src/util/session";

/**
 * Function to log out a user by deleting their session from Redis and clearing their session cookie. Redirection handled in handleLogout().
 */
export async function logoutUser() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(cookieName);

    if (sessionCookie?.value) {
        await redis.del(buildKey("session", sessionCookie.value));
        cookieStore.delete(cookieName);

        console.log("User logged out successfully.");
    }
}
