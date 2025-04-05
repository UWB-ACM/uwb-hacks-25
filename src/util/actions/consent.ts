"use server";

import { getSession } from "@/src/util/session";
import { redirect } from "next/navigation";
import { setUserLeaderboardConsent, setUserTermsLevel } from "../db/user";

/**
 * Sets the terms acceptance level for the currently logged-in user.
 * Redirects to the homepage if the user is not logged in.
 * @param terms - The terms level the user has accepted.
 */
export async function actionSetUserTerms(terms: number): Promise<void> {
    const session = await getSession();
    if (!session.user?.id) return redirect("/");

    await setUserTermsLevel(session.user.id, terms);
}

/**
 * Sets the leaderboard consent preference for the currently logged-in user.
 * Redirects to the homepage if the user is not logged in.
 * @param leaderboardConsent - whether the user consents to appear on the leaderboard.
 */
export async function actionSetUserLeaderboardConsent(
    leaderboardConsent: boolean,
): Promise<void> {
    const session = await getSession();
    if (!session.user?.id) return redirect("/");

    await setUserLeaderboardConsent(session.user.id, leaderboardConsent);
}
