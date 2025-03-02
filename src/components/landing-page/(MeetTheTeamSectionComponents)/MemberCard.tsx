import React from "react";
import Image from "next/image";

interface MemberCardProps {
  member: {id: string; name: string; role: string; photo: string };
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="member-card-animation flex items-center p-4 space-x-4 border-4 border-black shadow-lg bg-white hover:scale-105 transition-transform">
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
  );

};

export default MemberCard;
