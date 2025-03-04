import React from "react";
import Image from "next/image";

interface MemberCardProps {
    member: {
        id: string;
        name: string;
        role: string;
        photo: string;
        link?: string;
    };
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    const isClickable = !!member.link;

    const cardContent = (
        <div
            className="relative flex items-center p-4 border-4 border-black shadow-lg bg-white transition-transform transform group hover:scale-105 cursor-pointer duration-300 min-h-[140px] h-full w-[380px]" // Fixed width
        >
            {/* Profile Image on the Left */}
            <Image
                src={member.photo}
                alt={member.name}
                className="border-4 border-black flex-shrink-0"
                width={80}
                height={80}
            />

            {/* Member Info on the Right */}
            <div className="flex flex-col flex-grow ml-4 min-w-0">
                <h3 className="text-xl font-bold break-words whitespace-normal leading-tight truncate">
                    {member.name}
                </h3>
                <p className="text-sm text-gray-600 break-words whitespace-normal leading-tight truncate">
                    {member.role}
                </p>
            </div>

            {/* LinkedIn Logo (Top Right) */}
            {isClickable && (
                <Image
                    src="/MeetTheTeamPhotos/linkedin-icon/LI-In-Bug.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="absolute top-2 right-2"
                />
            )}
        </div>
    );

    return isClickable ? (
        <a href={member.link} target="_blank" rel="noopener noreferrer">
            {cardContent}
        </a>
    ) : (
        cardContent
    );
};

export default MemberCard;
