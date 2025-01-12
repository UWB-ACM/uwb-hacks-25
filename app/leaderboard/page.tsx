import React from "react";
import users_data from "./mockusers.json";

export default function Page() {
    const users = users_data["users"].sort(
        (a, b) => b.hackeroons - a.hackeroons,
    );

    return (
        <div className="w-full flex justify-center">
            <div className="m-12 w-[60vw]">
                <h1 className="text-center text-5xl">Leaderboard</h1>
                <ol className="mt-4 space-y-6 text-2xl text-center">
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} --- {user.hackeroons}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
