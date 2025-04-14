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
    // TODO: change from "preHackathonContents" --> "duringHackathonContents" to reveal track names
    const mysteryBoxContents =
        mystery_box_contents_data["contents"]["preHackathonContents"];

    const [showTracks, setShowTracks] = useState(false);

    useEffect(() => {
        if (!showTracks) return;
        gsap.to(".tracks", {
            delay: 1,
            y: 0,
            stagger: 0.25,
            ease: "power1.out",
        });
    }, [showTracks]);

    return (
        <Panel id="tracksPanel" className="mt-12 md:mt-16" panelColor="white">
            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[10%] left-[8%] rotate-[19deg]" />
            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[20%] right-[14%] -rotate-[15deg]" />
            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[10%] left-[16%] rotate-[28deg]" />
            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[3%] right-[20%] -rotate-[40deg]" />

            <PanelHeader
                id="tracksPanel"
                as="h2"
                className="text-[#49B2F8] border-none lg:w-full pb-0 bg-transparent"
                isSectionHeader
            >
                Tracks
            </PanelHeader>
            <PanelContent
                id="tracksPanel"
                className="relative flex flex-col items-center"
            >
                <MysteryBox
                    contents={mysteryBoxContents}
                    setShowTracks={setShowTracks}
                />

                {showTracks && mysteryBoxContents.length == 1 && (
                    <p
                        style={{ transform: "translateY(-100vh)" }}
                        className="tracks font-h1 text-xl md:text-2xl lg:text-3xl md:w-[70%] text-center mt-6"
                    >
                        {mysteryBoxContents[0]}
                    </p>
                )}

                {showTracks && mysteryBoxContents.length > 1 && (
                    <div className="w-full mt-6 flex flex-wrap justify-around gap-4">
                        {mysteryBoxContents.map((content, idx) => (
                            <p
                                key={idx}
                                style={{ transform: "translateY(-100vh)" }}
                                className="tracks font-h1 text-xl md:text-2xl lg:text-3xl text-center"
                            >
                                {content}
                            </p>
                        ))}
                    </div>
                )}
            </PanelContent>
        </Panel>
    );
};

export default TracksSection;
