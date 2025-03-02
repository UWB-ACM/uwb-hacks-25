"use client";

import React, { useEffect, useRef } from "react";
import MemberCard from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/MemberCard";
import gsap from "gsap";

interface TeamMembersGridProps {
  members: { id: string; name: string; role: string; photo: string }[];
}

const TeamMembersGrid: React.FC<TeamMembersGridProps> = ({ members }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {

      const gridItems = document.querySelectorAll('.member-card-animation');
      gsap.fromTo(gridItems, { opacity: 0, scale: 1, duration: 0.5 }, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5, ease: "circ" });
    }
  }, [members]); // Runs when `state` or members change

  return (
    <div ref={containerRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
          <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamMembersGrid;