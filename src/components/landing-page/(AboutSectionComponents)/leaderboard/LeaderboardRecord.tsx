import React from "react";
import Image from "next/image";

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
        <div className="grid grid-cols-3 gap-x-2 font-h1 bg-white border-2 border-black p-3 text-black md:text-lg lg:text-xl rounded-tr-md rounded-bl-md shadow-[3px_3px_0_rgb(0,0,0,1)]">
            <div className="flex gap-x-2 items-center justify-around">
                <p className="w-fit self-center text-2xl md:text-3xl">
                    {ranking}
                </p>
                <div className="relative w-[50px] h-[50px] md:w-[55px] md:h-[55px] lg:w-[65px] lg:h-[65px] aspect-square">
                    <Image
                        className="rounded-md border border-black"
                        src={picture}
                        alt="User Profile Photo"
                        fill
                    />
                </div>
            </div>
            <p className="self-center text-center">{name}</p>
            <p className="self-center text-center">{hackeroonAmount}</p>
        </div>
    );
}
