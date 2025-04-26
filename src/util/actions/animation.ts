"use server";

import { cookies } from "next/headers";

export async function actionSetTracksAnimation() {
    "use server";

    (await cookies()).set("hackathonTracksShown", "true");
}
