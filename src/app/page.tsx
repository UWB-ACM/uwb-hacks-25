import HomePage from "@/src/app/HomePage";
import { getPrizes } from "@/src/util/db/prize";
import { getLeaderboard } from "../util/db/leaderboard";
import { cookies } from "next/headers";

export default async function Page() {
    // The catch is to let this work in builds without databases.
    const hackeroonPrizes = getPrizes().catch((e) => {
        console.error(e);
        return [];
    });

    const leaderboardData = getLeaderboard().catch((e) => {
        console.error(e);
        return [];
    });

    const reqCookies = await cookies();
    const noTrackAnimation = reqCookies.has("hackathonTracksShown");

    return (
        <HomePage
            hackeroonPrizes={hackeroonPrizes}
            leaderboardData={leaderboardData}
            noTrackAnimation={noTrackAnimation}
        />
    );
}
