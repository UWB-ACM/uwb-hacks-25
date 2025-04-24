"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

// Panel components
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";

// Mystery Box components / assets
import MysteryBox from "./(TracksSectionComponents)/MysteryBox";
import tracks_data from "./(TracksSectionComponents)/tracks.json";

// Used in Tracks section background
import QuestionMark from "./(TracksSectionComponents)/QuestionMark";

// Tab navigation for tracks
import Tracks from "./(TracksSectionComponents)/TracksTabNavigation/Tracks";
import { Track } from "@/src/util/dataTypes";

const TracksSection = () => {
    // tracks contains all relevant information about each of the 6 tracks
    const tracks: Track[] = tracks_data["tracks"];
    const [showTracks, setShowTracks] = useState(false);
    const panelContentRef = useRef<HTMLDivElement | null>(null);
    const tracksNavRef = useRef<HTMLDivElement | null>(null);
    const selectedTrackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // set initial animation state for tracks comp
        gsap.set(tracksNavRef.current, {
            height: 0,
            opacity: 0,
            overflow: "hidden",
        });
        gsap.set(selectedTrackRef.current, {
            height: 0,
            opacity: 0,
            overflow: "hidden",
        });

        // place track buttons offscreen
        gsap.set(".track", { y: "-100vh", opacity: 0 });

        if (!showTracks) return;
        else {
            const tl = gsap.timeline();

            // animate out panel content containing mystery box
            tl.to(panelContentRef.current, {
                delay: 0.5,
                duration: 0.8,
                height: 0,
                overflow: "hidden",
            });

            // animate in tracks navigation comp
            tl.to(tracksNavRef.current, {
                delay: 0.5,
                height: "auto",
                opacity: 1,
                duration: 0.8,
                ease: "bounce.out",
                clearProps: "overflow",
            });

            // return track buttons to original position
            tl.to(".track", {
                duration: 0.1,
                y: 0,
                opacity: 1,
                ease: "power1.out",
                stagger: 0.15,
            });

            // animate in selected track comp
            tl.to(selectedTrackRef.current, {
                delay: 0.5,
                height: "auto",
                opacity: 1,
                duration: 0.8,
                ease: "bounce.out",
                clearProps: "overflow",
            });
        }
    }, [showTracks]);

    return (
        <Panel id="tracksPanel" className="mt-12 md:mt-16" panelColor="white">
            <PanelHeader
                parentPanelId="tracksPanel"
                as="h2"
                className="text-[#49B2F8] border-none lg:w-full bg-transparent pb-3 md:pb-4 lg:pb-6"
                isSectionHeader
            >
                Tracks
            </PanelHeader>

            <div ref={panelContentRef}>
                <PanelContent
                    parentPanelId="tracksPanel"
                    className="relative flex flex-col items-center"
                >
                    <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[10%] left-[8%] rotate-[19deg]" />
                    <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[20%] right-[14%] -rotate-[15deg]" />
                    <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[10%] left-[16%] rotate-[28deg]" />
                    <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[3%] right-[20%] -rotate-[40deg]" />

                    {/* Pass name of each track as contents of mystery box */}
                    <MysteryBox
                        contents={tracks.map((track) => track["name"])}
                        setShowTracks={setShowTracks}
                    />
                </PanelContent>
            </div>
            {showTracks && (
                <Tracks
                    tracks={tracks}
                    tracksNavRef={tracksNavRef}
                    selectedTrackRef={selectedTrackRef}
                />
            )}
        </Panel>
    );
};

export default TracksSection;
