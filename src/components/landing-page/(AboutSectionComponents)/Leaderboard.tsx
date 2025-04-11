import { use } from "react";
import { LeaderboardRecord } from "@/src/util/dataTypes";
import LeaderboardUserRecord from "./LeaderboardRecord";

export default function Leaderboard({
    leaderboardData,
}: {
    leaderboardData: Promise<LeaderboardRecord[]>;
}) {
    // Read the value of the promise we've been passing
    const leaderboard = use(leaderboardData);

    // Render leaderboard records!!
    return (
        <div className="grid text-white text-center gap-y-6">
            {leaderboard.map((user, index) => (
                <div key={index}>
                    <LeaderboardUserRecord
                        name={user.name}
                        hackeroonAmount={user.balance}
                    />
                </div>
            ))}
        </div>
    );
}
