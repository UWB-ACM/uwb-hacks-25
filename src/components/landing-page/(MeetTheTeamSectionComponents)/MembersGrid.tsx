import React from 'react';
import MemberCard from '@/src/components/landing-page/(MeetTheTeamSectionComponents)/MemberCard';

interface TeamMembersGridProps {
  members: { id: string; name: string; role: string; photo: string }[];
}

const TeamMembersGrid: React.FC<TeamMembersGridProps> = ({ members }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamMembersGrid;
