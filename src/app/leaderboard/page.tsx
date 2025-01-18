"use client"

import React, { useEffect, useState } from "react";

/*
TODO CUSTOM TYPES?
idk if custom types that are the result of complex queries should be listed here or dataTypes
imma keep it here for now
-Simon
*/
type Leader = {
    name: string;
    balance: number;
}

export default function Page() {

    const [leaders, setLeaders] = useState<Leader[]>([]);  

    useEffect(() => {

        fetch("api/leaderboard")
        .then((response) => response.json())
        .then((remote_data) => {

            setLeaders(remote_data as Leader[]);
            console.log(remote_data);
        })
        .catch((error) => console.error("Failed to load leaderboard:",error));
    }, [])

    return (
        <div className="w-full grid place-content-center">
            <div className="m-12 w-[60vw] grid place-content-center">
                <h1 className="text-center text-5xl">Leaderboard</h1>
                <ol className="mt-6 space-y-6 text-2xl list-decimal">
                    {leaders.map((leader, i) => (
                        <li key={i} className="w-fit">
                            {leader.name} --- {leader.balance}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
