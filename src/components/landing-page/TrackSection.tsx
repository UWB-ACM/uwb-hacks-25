"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import QuestionMark from "@/public/tracksSection/question-mark.svg";
import MysteryBox from "@/public/tracksSection/mystery-box.svg";

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
        <div className="mt-10 relative flex-col p-4 flex items-center bg-white border-[3px] border-black overflow-hidden">
            {/* Random question marks */}
            <Image
                className="questionMark absolute top-[10%] left-[10%] -rotate-[12deg]"
                alt=""
                src={QuestionMark}
                width={60}
            />
            <Image
                className="questionMark absolute bottom-[15%] left-[20%] rotate-[25deg]"
                alt=""
                src={QuestionMark}
                width={70}
            />
            <Image
                className="questionMark absolute top-[10%] right-[20%] rotate-[25deg]"
                alt="q"
                src={QuestionMark}
                width={100}
            />
            <Image
                className="questionMark absolute bottom-[15%] right-[20%] -rotate-[25deg]"
                alt=""
                src={QuestionMark}
                width={40}
            />

            <h2
                className="z-10 text-[#49B2F8] font-h1 my-4"
                style={{ fontSize: "calc(1rem + 3vw)" }}
            >
                TRACKS
            </h2>
            <div className="relative z-[5] flex items-center">
                <Image
                    className="box aspect-square w-[250px] md:w-[350px] lg:w-[400px]"
                    src={MysteryBox}
                    alt="Image of Mystery Box"
                    width={0}
                    height={0}
                />
            </div>
            <p className="z-[5] font-h1 text-xl md:text-2xl lg:text-3xl md:w-[70%] text-center m-2 md:m-4 pt-2 bg-white">
                All hackathon tracks will be unveiled on the day of the
                hackathon!
            </p>
        </div>
    );
};

export default TracksSection;
