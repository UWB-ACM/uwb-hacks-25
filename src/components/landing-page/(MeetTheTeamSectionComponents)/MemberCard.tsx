import React from "react";
import Image from "next/image";

interface MemberCardProps {
    member: { id: string; name: string; role: string; photo: string; link?: string };
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    const isClickable = !!member.link; // Check if the member has a link

    const cardContent = (
        <div className={`relative flex items-center p-4 space-x-4 border-4 border-black shadow-lg bg-white transition-transform transform group hover:scale-105 cursor-pointer duration-300`}>
            {/* Profile Image */}
            <Image
                src={member.photo}
                alt={member.name}
                className="border-4 border-black"
                width={80}
                height={80}
            />
            {/* Member Details */}
            <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
            </div>
            {/* LinkedIn Logo (Only Show if a Link Exists) */}
            {isClickable && (
                <Image
                    src="/MeetTheTeamPhotos/linkedin-icon/LI-In-Bug.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
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
