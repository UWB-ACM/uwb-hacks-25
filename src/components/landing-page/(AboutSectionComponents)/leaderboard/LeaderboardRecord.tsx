import React from "react";
import UserProfilePhoto from "./UserProfilePhoto";

type LeaderboardUserRecordProps = {
    ranking: number;
    name: string;
    hackeroonAmount: number;
    picture: string;
};

export default function LeaderboardUserRecord({
    ranking,
    name,
    hackeroonAmount,
    picture,
}: LeaderboardUserRecordProps) {
    return (
        <div className="grid grid-cols-3 gap-x-3 md:gap-x-6 font-h1 bg-white border-2 border-black p-3 text-black md:text-lg lg:text-xl rounded-tr-md rounded-bl-md shadow-[3px_3px_0_rgb(0,0,0,1)]">
            <div className="flex justify-center items-center">
                <UserProfilePhoto ranking={ranking} picture={picture} />
            </div>
            <div className="flex justify-center items-center">
                <p>{name}</p>
            </div>
            <div className="flex justify-center items-center">
                <p>{hackeroonAmount}</p>
            </div>
        </div>
    );
}
