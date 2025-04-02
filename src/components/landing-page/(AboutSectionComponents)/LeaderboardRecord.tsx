import React from "react";

type LeaderboardRecordProps = {
    name: string;
    hackeroonAmount: number;
};

export default function LeaderboardRecord({
    name,
    hackeroonAmount,
}: LeaderboardRecordProps) {
    return (
        <div className="grid grid-cols-3">
            <div className="flex justify-center items-center">
                <div className="w-[50px] h-[50px] bg-white border-black border-[1px] rounded-full" />
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
