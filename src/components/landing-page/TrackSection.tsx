"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Panel components
import Panel from "./(AboutSectionComponents)/Panel/Panel";
import PanelContent from "./(AboutSectionComponents)/Panel/Content";
import PanelHeader from "./(AboutSectionComponents)/Panel/Header";

// Mystery box components
import MysteryBox from "./(TracksSectionComponents)/MysteryBox";
import MysteryBoxLid from "./(TracksSectionComponents)/MysteryBoxLid";

// Used in Tracks section background
import QuestionMark from "./(TracksSectionComponents)/QuestionMark";

const TracksSection = () => {
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const mysteryBoxRef = useRef(null);
    const mysteryBoxLidRef = useRef(null);

    const [boxOpened, setBoxOpened] = useState(false);

    // Initial animation for mystery box
    useEffect(() => {
        const mysteryBox = mysteryBoxRef.current;

        if (!mysteryBox) return;

        tlRef.current = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

        const shakeMysteryBox = () => {
            if (!tlRef.current) return;

            tlRef.current.to(mysteryBox, {
                x: 20,
                rotate: "5deg",
                duration: 0.15,
                ease: "power1.out",
            });
            tlRef.current.to(mysteryBox, {
                x: -20,
                rotate: "-5deg",
                duration: 0.15,
                ease: "power1.out",
            });
        };

        tlRef.current.to(mysteryBox, {
            y: "-2vh",
            duration: 0.75,
            ease: "bounce.in",
        });
        for (let idx = 0; idx < 3; idx++) {
            shakeMysteryBox();
        }
        tlRef.current.to(mysteryBox, { x: 0, y: 0, rotate: 0, duration: 0.3 });
    }, []);

    const handleBoxOpen = () => {
        const mysteryBox = mysteryBoxRef.current;
        const mysteryBoxLid = mysteryBoxLidRef.current;

        if (!tlRef.current || !mysteryBox || !mysteryBoxLid) return;

        setBoxOpened(true);

        tlRef.current.kill();
        tlRef.current = gsap.timeline();
        tlRef.current.to(mysteryBox, { x: 0, rotate: 0 });
        tlRef.current.to(mysteryBox, {
            y: 0,
            duration: 1,
        });
        tlRef.current.to(mysteryBox, {
            delay: 0.5,
            duration: 0.2,
            y: -10,
            ease: "power2.out",
        });
        tlRef.current.to(mysteryBox, {
            y: 0,
            duration: 0.2,
            ease: "power2.in",
        });
        tlRef.current.to(mysteryBox, {
            delay: 0.5,
            duration: 0.2,
            y: -15,
            ease: "power2.out",
        });
        tlRef.current.to(mysteryBox, {
            y: 0,
            duration: 0.2,
            ease: "power2.in",
        });
        tlRef.current.to(mysteryBox, {
            delay: 0.5,
            duration: 0.2,
            y: -20,
            ease: "power2.out",
        });
        tlRef.current.to(mysteryBox, {
            y: 0,
            duration: 0.2,
            ease: "power2.in",
        });
    };

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
                <button
                    ref={mysteryBoxRef}
                    onClick={handleBoxOpen}
                    className="relative"
                >
                    <MysteryBox className="w-[200px] md:w-[325px] lg:w-[375px] xl:w-[400px] h-fit" />
                    <MysteryBoxLid ref={mysteryBoxLidRef} className="absolute top-0 w-[200px] md:w-[325px] lg:w-[375px] xl:w-[400px] h-fit" />
                </button>
                <p className="font-h1 text-xl md:text-2xl lg:text-3xl md:w-[70%] text-center mt-6">
                    All hackathon tracks will be unveiled on the day of the
                    hackathon!
                </p>
            </PanelContent>
        </Panel>
    );
};

export default TracksSection;
