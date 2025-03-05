"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const TracksSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tlRef = useRef<gsap.core.Timeline>(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

        tl.to(".box", { y: -50, x: 10, rotateZ: 5, duration: 0.3 })
            .to(".box", { x: -10, rotateZ: -5, duration: 0.12 })
            .to(".box", { x: 10, rotateZ: 5, duration: 0.12 })
            .to(".box", { x: -10, rotateZ: -5, duration: 0.12 })
            .to(".box", { x: 10, rotateZ: 5, duration: 0.12 })
            .to(".box", { x: -10, rotateZ: -5, duration: 0.12 })
            .to(".box", { x: 10, rotateZ: 5, duration: 0.12 })
            .to(".box", { x: -10, rotateZ: -5, duration: 0.12 })
            .to(".box", { x: 0, y: 0, rotateZ: 0, duration: 0.3 });

        tlRef.current = tl;

        return () => {
            tl.kill();
        };
    }, []);

    const handleClick = () => {
        if (tlRef.current) {
            tlRef.current.pause().clear();
        }

        gsap.to(".lid", {
            y: "-100vh",
            x: "18vw",
            rotate: 160,
            duration: 0.9,
            onComplete: () => {
                gsap.to(".lid", {
                    y: "100vh",
                    x: "24vw",
                    rotate: 160,
                    duration: 1,
                });
            },
        });

        gsap.to(".box", {
            y: 0,
            rotateZ: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                setIsOpen(true);
            },
        });
    };

    return (
        <div className="relative flex-col m-10 flex items-center bg-white border-[3px] border-black mb-0 overflow-hidden">
            <h1
                className="z-10 text-[#49B2F8] font-h1 my-4"
                style={{ fontSize: "calc(1rem + 3vw)" }}
            >
                TRACKS
            </h1>
            <div className="h-[40vh] md:h-[30vh] lg:h-[40vh] max-h-[300px] md:max-h-[350px] flex items-center">
                <button
                    onClick={handleClick}
                    className="box relative flex flex-col items-center"
                >
                    <div className="lid z-[5] absolute -top-5 flex">
                        <div className="flex justify-center items-center w-[40px] h-[50px] bg-black rounded-full translate-x-1 -rotate-45">
                            <div className="w-[75%] h-[75%] bg-white rounded-full" />
                        </div>
                        <div className="flex justify-center items-center w-[40px] h-[50px] bg-black rounded-full -translate-x-1 rotate-45">
                            <div className="w-[75%] h-[75%] bg-white rounded-full" />
                        </div>
                    </div>
                    <div className="lid z-10 flex justify-center w-[220px] h-[30px] bg-gray-500 rounded-lg border-2 border-black">
                        <div className="w-[20px] h-full bg-gray-700" />
                    </div>
                    <div className="flex justify-center w-[200px] h-[150px] bg-gray-400 rounded-bl-lg rounded-br-lg border-2 border-black">
                        <div className="w-[20px] h-full bg-gray-700" />
                    </div>
                </button>
            </div>
            {!isOpen && (
                <p className="flex items-center text-lg md:text-xl lg:text-2xl text-center font-h2 px-6 pb-4 md:p-8 opacity-0">
                    Tracks will be unveiled on the day of the hackathon!
                </p>
            )}
            {isOpen && (
                <p className="content flex items-center text-lg md:text-xl lg:text-2xl text-center font-h2 px-6 pb-4 md:p-8">
                    Tracks will be unveiled on the day of the hackathon!
                </p>
            )}
        </div>
    );
};

export default TracksSection;
