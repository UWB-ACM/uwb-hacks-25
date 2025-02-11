import React from 'react';

interface MemberCardProps {
  member: { id: string; name: string; role: string; photo: string };
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="flex items-center p-4 space-x-4 border-4 border-black shadow-lg bg-white hover:scale-105 transition-transform">
      <img
        src={member.photo}
        alt={member.name}
        className="w-20 h-20 rounded-full border-2 border-black"
      />
      <div>
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
