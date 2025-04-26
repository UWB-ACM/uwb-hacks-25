"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

import LivePoll from "./(AboutSectionComponents)/LivePoll";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { actionSetTracksAnimation } from "@/src/util/actions/animation";

const TracksSection = ({ noTrackAnimation }: { noTrackAnimation: boolean }) => {
    const panelMargin = "mt-12 md:mt-16";

    // tracks contains all relevant information about each of the 6 tracks
    const tracks: Track[] = tracks_data["tracks"];
    const [showTracks, setShowTracks] = useState(false);
    const panelContentRef = useRef<HTMLDivElement | null>(null);
    const tracksNavRef = useRef<HTMLDivElement | null>(null);
    const selectedTrackRef = useRef<HTMLDivElement | null>(null);
    const livePollRef = useRef<HTMLDivElement | null>(null);

    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (noTrackAnimation) {
            return;
        }

        // set initial animation state for tracks comp
        gsap.set(tracksNavRef.current, {
            height: 0,
            border: 0,
            overflow: "hidden",
        });
        gsap.set(selectedTrackRef.current, {
            height: 0,
            padding: 0,
            opacity: 0,
            overflow: "hidden",
        });
        gsap.set(livePollRef.current, {
            height: 0,
            padding: 0,
            opacity: 0,
            borderTop: 0,
            overflow: "hidden",
        });

        // place track buttons offscreen
        gsap.set(".track", { y: "-100vh", opacity: 0 });

        // set scroll trigger to activate mystery box animation
        ScrollTrigger.create({
            trigger: "#tracksPanel",
            start: "30% 80%",
            onEnter: () => setStartAnimation(true),
        });

        if (!showTracks) return;
        else {
            const tl = gsap.timeline();

            // animate out panel content containing mystery box
            tl.to(panelContentRef.current, {
                delay: 0.5,
                duration: 0.5,
                height: 0,
                overflow: "hidden",
            });

            tl.to(tracksNavRef.current, {
                delay: 0.5,
                height: "auto",
                duration: 0.8,
                ease: "bounce.out",
                clearProps: "overflow,border",
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
                padding: window.innerWidth < 800 ? "24px" : "40px",
                duration: 0.75,
                ease: "bounce.out",
                clearProps: "overflow",
            }).to(selectedTrackRef.current, {
                duration: 0.3,
                opacity: 1,
            });

            // animate in live poll comp
            tl.to(livePollRef.current, {
                delay: 0.3,
                height: "auto",
                borderTop: 4,
                padding: window.innerWidth < 800 ? "24px" : "40px",
                duration: 0.5,
                ease: "bounce.out",
                clearProps: "overflow",
            }).to(livePollRef.current, {
                duration: 0.3,
                opacity: 1,
                onComplete: () => {
                    // set cookies storage to prevent animation from playing again
                    actionSetTracksAnimation();
                },
            });
        }
    }, [showTracks, noTrackAnimation]);

    return (
        <Panel id="tracksPanel" className={panelMargin} panelColor="white">
            <PanelHeader
                parentPanelId="tracksPanel"
                as="h2"
                className="text-[#49B2F8] border-none lg:w-full bg-transparent pb-3 md:pb-4 lg:pb-6"
                isSectionHeader
            >
                Tracks
            </PanelHeader>

            <div ref={panelContentRef}>
                {!noTrackAnimation && (
                    <PanelContent
                        parentPanelId="tracksPanel"
                        className="relative flex flex-col items-center"
                    >
                        <>
                            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[10%] left-[8%] rotate-[19deg]" />
                            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] top-[20%] right-[14%] -rotate-[15deg]" />
                            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[10%] left-[16%] rotate-[28deg]" />
                            <QuestionMark className="w-[65px] md:w-[80px] lg:w-[100px] xl:w-[125px] bottom-[3%] right-[20%] -rotate-[40deg]" />
                        </>

                        {/* Pass name of each track as contents of mystery box */}
                        <MysteryBox
                            contents={tracks.map((track) => track["name"])}
                            startAnimation={startAnimation}
                            setShowTracks={setShowTracks}
                        />
                    </PanelContent>
                )}
            </div>

            <Tracks
                tracks={tracks}
                tracksNavRef={tracksNavRef}
                selectedTrackRef={selectedTrackRef}
            />

            <LivePoll livePollRef={livePollRef} />
        </Panel>
    );
};

export default TracksSection;
