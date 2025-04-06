import React from "react";

// Panel components
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";

// Mystery Box components / assets
import MysteryBox from "./(TracksSectionComponents)/MysteryBox";
import mystery_box_contents_data from "./(TracksSectionComponents)/mysteryBoxContents.json";

// Used in Tracks section background
import QuestionMark from "./(TracksSectionComponents)/QuestionMark";

const TracksSection = () => {
    // CHANGE FROM "preHackathonContents" --> "duringHackathonContents" to reveal track names
    const mysteryBoxContents =
        mystery_box_contents_data["contents"]["preHackathonContents"];

    return (
        <Panel className="mt-12 md:mt-16" panelColor="white">
            <PanelHeader
                as="h2"
                className="text-[#49B2F8] border-none lg:w-full pb-0"
                isSectionHeader
            >
                Tracks
            </PanelHeader>
            <PanelContent className="relative flex flex-col items-center">
                <MysteryBox contents={mysteryBoxContents} />
                <p className="font-h1 text-xl md:text-2xl lg:text-3xl md:w-[70%] text-center mt-6">
                    All hackathon tracks will be unveiled on the day of the
                    hackathon!
                </p>
            </PanelContent>
        </Panel>
    );
};

export default TracksSection;
