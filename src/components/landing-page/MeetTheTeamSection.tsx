"use client";

import React, { useState } from "react";
import { committees } from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/Committees";
import CommitteeTabs from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/CommitteeTabs";
import MembersGrid from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/MembersGrid";
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";

const MeetTheTeamSection = () => {
    const panelMargin = "mt-12 md:mt-16";

    const [activeCommitteeId, setActiveCommitteeId] = useState(
        committees[0].id,
    );

    const activeCommittee = committees.find(
        (committee) => committee.id === activeCommitteeId,
    );

    return (
        <Panel id="meetTheTeamPanel" panelColor="white" className={panelMargin}>
            {/* Heading */}
            <PanelHeader
                parentPanelId="meetTheTeamPanel"
                className="text-[#49B2F8] border-none lg:w-full pb-0 bg-transparent"
                isSectionHeader
            >
                Meet the League
            </PanelHeader>

            <PanelContent parentPanelId="meetTheTeamPanel" className="space-y-8">
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
            </PanelContent>
        </Panel>
    );
};

export default MeetTheTeamSection;
