import React from "react";
import Image from "next/image";

type UserProfilePhotoProps = {
    ranking: number;
    picture: string;
};

export default function UserProfilePhoto({
    ranking,
    picture,
}: UserProfilePhotoProps) {
    return (
        <div className="relative">
            <div
                className={`absolute -translate-y-[30px] -translate-x-[30px]`}
            >
                <div className="relative h-[60px] w-[60px]">
                    <Image
                        src={`/leaderboard/speech-bubble-${ranking}.svg`}
                        alt="User leaderboard ranking"
                        fill
                    />
                </div>
            </div>
            <Image
                className="rounded-md border border-black"
                src={picture}
                alt="User Profile Photo"
                width="75"
                height="75"
            />
        </div>
    );
}
