"use client";

import React, { useState } from "react";
import { committees } from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/Committees";
import CommitteeTabs from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/CommitteeTabs";
import MembersGrid from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/MembersGrid";

const MeetTheTeamSection = () => {
    const [activeCommitteeId, setActiveCommitteeId] = useState(
        committees[0].id,
    );

    const activeCommittee = committees.find(
        (committee) => committee.id === activeCommitteeId,
    );

  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <div className="text-center font-h1">
        <h1 className="text-3xl font-bold">
          MEET THE LEAGUE
        </h1>
      </div>

            {/* Tabs */}
            <CommitteeTabs
                committees={committees}
                activeCommitteeId={activeCommitteeId}
                setActiveCommitteeId={setActiveCommitteeId}
            />

            {/* Team Members */}
            {activeCommittee && (
                <MembersGrid members={activeCommittee.members} />
            )}
        </div>
    );
};

export default MeetTheTeamSection;
