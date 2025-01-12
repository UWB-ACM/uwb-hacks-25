import React from "react";
import users_data from "./mockusers.json";

export default function Page() {
    // sort users in descending order by their hackeroon count
    const users = users_data["users"].sort(
        (a, b) => b.hackeroons - a.hackeroons,
    );

    return (
        <div className="w-full grid place-content-center">
            <div className="m-12 w-[60vw] grid place-content-center">
                <h1 className="text-center text-5xl">Leaderboard</h1>
                <ol className="mt-6 space-y-6 text-2xl list-decimal">
                    {users.map((user) => (
                        <li key={user.id} className="w-fit">
                            {user.name} --- {user.hackeroons}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
