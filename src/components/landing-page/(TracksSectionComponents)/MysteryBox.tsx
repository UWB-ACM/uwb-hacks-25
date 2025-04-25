"use client";

import React, { useRef, useEffect, Dispatch, SetStateAction } from "react";
import gsap from "gsap";

// Mystery box components
import MysteryBoxContainer from "./MysteryBoxContainer";
import MysteryBoxLid from "./MysteryBoxLid";

// Mystery box animation functions
import { bounceBox, popLid } from "./MysteryBoxAnimationFunctions";

type MysteryBoxProps = {
    contents: string[];
    startAnimation: boolean;
    setShowTracks: Dispatch<SetStateAction<boolean>>;
};

export default function MysteryBox({
    contents,
    startAnimation,
    setShowTracks,
}: MysteryBoxProps) {
    const mysteryBoxRef = useRef<HTMLDivElement | null>(null);
    const mysteryBoxLidRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Initial animation for mystery box
        const mysteryBox = mysteryBoxRef.current;
        if (!mysteryBox) return;

        if (startAnimation) {
            // scroll tracks section into view
            const tracksSection = document.getElementById("tracks");
            if (tracksSection) {
                const tracksSectionRect = tracksSection.getBoundingClientRect();

                const scrollTo =
                    window.pageYOffset + tracksSectionRect.top - 200;

                window.scrollTo({
                    behavior: "smooth",
                    top: scrollTo,
                });
            }

            // start mystery box animation
            const mysteryBox = mysteryBoxRef.current;
            const mysteryBoxLid = mysteryBoxLidRef.current;
            const contentElements = document.querySelectorAll(".content");

            if (!mysteryBox || !mysteryBoxLid) return;

            const tl = gsap.timeline({ delay: 0.5 });

            for (let i = 0; i < 3; i++) {
                bounceBox(tl, mysteryBox, mysteryBoxLid, i);
            }

            popLid(tl, mysteryBox, mysteryBoxLid);

            gsap.set(contentElements, { scale: 0.5 });

            contentElements.forEach((content, idx) => {
                const xOffset =
                    (idx - Math.floor(contentElements.length / 2)) * 300;

                if (!tl) return;
                tl.to(
                    content,
                    {
                        y: "-100vh",
                        x: xOffset,
                        rotate: `${(idx - Math.floor(contentElements.length / 2)) * 30}deg`,
                        duration: 0.3,
                        ease: "power1.out",
                        scale: 1,
                        onComplete: () => setShowTracks(true),
                    },
                    "<",
                );
            });
        }
    }, [startAnimation]);

    return (
        <div ref={mysteryBoxRef} className="relative">
            <div className="z-20 relative">
                <MysteryBoxContainer className="w-[200px] md:w-[325px] lg:w-[375px] h-fit" />
                <MysteryBoxLid
                    ref={mysteryBoxLidRef}
                    className="absolute top-[10px] w-[200px] md:w-[325px] lg:w-[375px] h-fit"
                />
            </div>

            {contents.map((content, idx) => (
                <p
                    key={idx}
                    className="z-10 content absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-75 font-h1 text-xl md:text-2xl lg:text-3xl text-center text-black"
                >
                    {content}
                </p>
            ))}
        </div>
    );
}
