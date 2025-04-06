"use client";

import React, {
    useRef,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import gsap from "gsap";

// Mystery box components
import MysteryBoxContainer from "./MysteryBoxContainer";
import MysteryBoxLid from "./MysteryBoxLid";

// Mystery box animation functions
import {
    shakeMysteryBox,
    bounceBox,
    popLid,
} from "./MysteryBoxAnimationFunctions";

type MysteryBoxProps = {
    contents: string[];
    setShowTracks: Dispatch<SetStateAction<boolean>>;
};

export default function MysteryBox({
    contents,
    setShowTracks,
}: MysteryBoxProps) {
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const mysteryBoxRef = useRef<HTMLButtonElement | null>(null);
    const mysteryBoxLidRef = useRef<SVGSVGElement | null>(null);

    const [boxOpened, setBoxOpened] = useState(false);

    // Initial animation for mystery box
    useEffect(() => {
        const mysteryBox = mysteryBoxRef.current;

        if (!mysteryBox) return;

        tlRef.current = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

        shakeMysteryBox(tlRef, mysteryBox);
    }, []);

    const handleBoxOpen = () => {
        if (boxOpened) return;

        setBoxOpened(true);

        const mysteryBox = mysteryBoxRef.current;
        const mysteryBoxLid = mysteryBoxLidRef.current;
        const contentElements = document.querySelectorAll(".content");

        if (!tlRef.current || !mysteryBox || !mysteryBoxLid) return;

        tlRef.current.kill();
        tlRef.current = gsap.timeline();
        tlRef.current.to(mysteryBox, { x: 0, rotate: 0 });
        tlRef.current.to(mysteryBox, {
            y: 0,
            duration: 1,
        });

        for (let i = 0; i < 3; i++) {
            bounceBox(tlRef, mysteryBox, mysteryBoxLid, i);
        }

        popLid(tlRef, mysteryBoxLid);

        contentElements.forEach((content, idx) => {
            const xOffset =
                (idx - Math.floor(contentElements.length / 2)) * 300;

            if (!tlRef.current) return;
            tlRef.current.to(
                content,
                {
                    y: "-100vh",
                    x: xOffset,
                    rotate: `${(idx - Math.floor(contentElements.length / 2)) * 30}deg`,
                    duration: 1,
                    ease: "power1.out",
                    scale: 1,
                    onComplete: () => setShowTracks(true),
                },
                "<",
            );
        });
    };

    return (
        <button
            ref={mysteryBoxRef}
            onClick={handleBoxOpen}
            className="relative"
        >
            {contents.map((content, idx) => (
                <p
                    key={idx}
                    className="content -z-[5] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-75 font-h1 text-xl md:text-2xl lg:text-3xl text-center"
                >
                    {content}
                </p>
            ))}
            <MysteryBoxContainer className="w-[200px] md:w-[325px] lg:w-[375px] h-fit" />
            <MysteryBoxLid
                ref={mysteryBoxLidRef}
                className="absolute top-0 w-[200px] md:w-[325px] lg:w-[375px] h-fit"
            />
        </button>
    );
}
