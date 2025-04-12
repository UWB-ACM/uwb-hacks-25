import React from "react";
import Image from "next/image";

type LeaderboardUserRecordProps = {
    name: string;
    hackeroonAmount: number;
    picture: string;
};

export default function LeaderboardUserRecord({
    name,
    hackeroonAmount,
    picture,
}: LeaderboardUserRecordProps) {
    return (
        <div className="grid grid-cols-3">
            <div className="flex justify-center items-center">
                <Image
                    className="rounded-full"
                    src={picture}
                    alt="User Profile Photo"
                    width="75"
                    height="75"
                />
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
