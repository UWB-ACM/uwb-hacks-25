"use client";

import React, { useRef, useState, useEffect } from "react";
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
};

export default function MysteryBox({ contents }: MysteryBoxProps) {
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
                    className="-z-[5] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-75 font-h1 text-xl md:text-2xl lg:text-3xl text-center"
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
