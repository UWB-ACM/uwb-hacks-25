"use client";

import React, { useEffect, useRef } from "react";
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

    useEffect(() => {
        tlRef.current = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

        tlRef.current.to(".box", {
            y: "-2vh",
            duration: 0.75,
            ease: "bounce.in",
        });
        tlRef.current.to(".box", {
            x: 20,
            rotate: "5deg",
            duration: 0.15,
            ease: "power1.out",
        });
        tlRef.current.to(".box", {
            x: -20,
            rotate: "-5deg",
            duration: 0.15,
            ease: "power1.out",
        });
        tlRef.current.to(".box", {
            x: 20,
            rotate: "5deg",
            duration: 0.15,
            ease: "power1.out",
        });
        tlRef.current.to(".box", {
            x: -20,
            rotate: "-5deg",
            duration: 0.15,
            ease: "power1.out",
        });
        tlRef.current.to(".box", {
            x: 20,
            rotate: "5deg",
            duration: 0.15,
            ease: "power1.out",
        });
        tlRef.current.to(".box", {
            x: -20,
            rotate: "-5deg",
            duration: 0.15,
            ease: "power1.out",
        });
        tlRef.current.to(".box", { y: 0, x: 0, rotate: 0, duration: 0.3 });
    }, []);

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
                <div className="relative box">
                    <MysteryBox className="w-[200px] md:w-[325px] lg:w-[375px] xl:w-[400px] h-fit" />
                    <MysteryBoxLid className="absolute top-0 w-[200px] md:w-[325px] lg:w-[375px] xl:w-[400px] h-fit" />
                </div>
                <p className="font-h1 text-xl md:text-2xl lg:text-3xl md:w-[70%] text-center mt-6">
                    All hackathon tracks will be unveiled on the day of the
                    hackathon!
                </p>
            </PanelContent>
        </Panel>
    );
};

export default TracksSection;
