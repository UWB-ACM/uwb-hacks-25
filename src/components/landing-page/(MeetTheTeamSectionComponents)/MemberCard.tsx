import React from "react";
import Image from "next/image";
import LinkedInImage from "@/public/MeetTheTeamPhotos/linkedin-icon/LI-In-Bug.png";

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
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start p-4 border-4 border-black shadow-lg bg-white transition-transform transform group hover:scale-105 cursor-pointer duration-300 w-[130px] h-[180px] sm:w-[340px] sm:h-[140px] flex-shrink-0">
            {/* Profile Image */}
            <Image
                src={member.photo}
                alt={member.name}
                className="border-4 border-black w-24 h-24 object-cover object-center"
                width={96}
                height={96}
            />

            {/* Member Info (Increased Spacing) */}
            <div className="flex flex-col flex-grow min-w-0 text-center sm:text-left mt-2 sm:mt-0 sm:ml-4">
                <h3 className="text-sm sm:text-lg font-bold truncate leading-tight text-wrap">
                    {member.name}
                </h3>
                <p className="text-sm text-gray-600 hidden sm:block truncate text-wrap">
                    {member.role}
                </p>
            </div>

            {/* LinkedIn Logo */}
            <div>
                {isClickable && (
                    <Image
                        src={LinkedInImage}
                        width={30}
                        alt="LinkedIn"
                        className="absolute top-2 right-2 hidden sm:block"
                    />
                )}
            </div>
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
