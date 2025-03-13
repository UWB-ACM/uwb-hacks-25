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
                <h2 className="[color:#49B2F8] text-center [font-family:san-marino-beach] text-4xl">
                    MEET THE LEAGUE
                </h2>

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
