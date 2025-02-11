'use client';

import React, { useState } from 'react';
import { committees } from './(MeetTheTeamSectionComponents)/Committees';
import CommitteeTabs from './(MeetTheTeamSectionComponents)/CommitteeTabs';
import MembersGrid from './(MeetTheTeamSectionComponents)/MembersGrid';

const MeetTheTeamSection = () => {
  const [activeCommitteeId, setActiveCommitteeId] = useState(committees[0].id);

  const activeCommittee = committees.find((committee) => committee.id === activeCommitteeId);

  return (
    <div className="p-6 space-y-8">
      {/* Tabs */}
      <CommitteeTabs
        committees={committees}
        activeCommitteeId={activeCommitteeId}
        setActiveCommitteeId={setActiveCommitteeId}
      />

      {/* Team Members */}
      {activeCommittee && <MembersGrid members={activeCommittee.members} />}
    </div>
  );
};

export default MeetTheTeamSection;
