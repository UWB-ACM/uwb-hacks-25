"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap";

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

    const [showTracks, setShowTracks] = useState(false);

    useEffect(() => {
        if (!showTracks) return;
        gsap.set(".tracks", { y: "-100vh" });
        gsap.to(".tracks", {
            delay: 0.25,
            y: 0,
            stagger: 0.25,
            ease: "power1.out",
        });
    }, [showTracks]);

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
                <MysteryBox
                    contents={mysteryBoxContents}
                    setShowTracks={setShowTracks}
                />
                {showTracks && (
                    <>
                        {mysteryBoxContents.map((content, idx) => (
                            <p
                                key={idx}
                                className="tracks font-h1 text-xl md:text-2xl lg:text-3xl md:w-[70%] text-center mt-6"
                            >
                                {content}
                            </p>
                        ))}
                    </>
                )}
            </PanelContent>
        </Panel>
    );
};

export default TracksSection;
