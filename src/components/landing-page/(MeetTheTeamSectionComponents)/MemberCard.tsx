import React from "react";
import Image from "next/image";

interface MemberCardProps {
    member: { id: string; name: string; role: string; photo: string; link: string };
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return (
        <a
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
        >
            <div className="flex items-center p-4 space-x-4 border-4 border-black shadow-lg bg-white transition-transform transform group-hover:scale-105 cursor-pointer duration-300">
                <Image
                    src={member.photo}
                    alt={member.name}
                    className="border-4 border-black"
                    width={80}
                    height={80}
                />
                <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                </div>
            </div>
        </a>
    );
};

export default MemberCard;
