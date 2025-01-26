import { getLeaderboard } from "../util/db/leaderboard";

export default async function Page() {
    const [leaderboard] = await Promise.all([getLeaderboard()]);

    const leaderboardList = leaderboard.map((user, index) => (
        <li key={index} className="flex justify-between">
            <span>{user.name}</span>
            <span>{user.balance}</span>
        </li>
    ));

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold">Leaderboard</h1>
            
            {leaderboardList}
        </div>
    );
}
