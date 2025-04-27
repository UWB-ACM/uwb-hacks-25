"use server";

import { cookies } from "next/headers";

export async function actionSetTracksAnimation() {
    "use server";

    // Dates are in milliseconds
    const animationTimeSeconds = 60 * 60 * 24 * 7;
    const expiresAt = new Date(Date.now() + animationTimeSeconds * 1000);

    (await cookies()).set({
        name: "hackathonTracksShown",
        value: "true",
        expires: expiresAt,
    });
}
