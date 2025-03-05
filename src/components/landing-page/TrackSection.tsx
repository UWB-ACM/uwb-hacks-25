"use client";

import React, { useRef } from "react";
import gsap from "gsap";

const TracksSection = () => {
    const container = useRef(null);
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

    const onMouseEnter = () => {
        tl.clear();
        tl.resume();
        tl.to(".box", { y: -50, rotateZ: 5, duration: 0.15 });
        tl.to(".box", { rotateZ: -5, duration: 0.08 });
        tl.to(".box", { rotateZ: 5, duration: 0.08 });
        tl.to(".box", { rotateZ: -5, duration: 0.08 });
        tl.to(".box", { rotateZ: 5, duration: 0.08 });
        tl.to(".box", { rotateZ: -5, duration: 0.08 });
        tl.to(".box", { rotateZ: 5, duration: 0.08 });
        tl.to(".box", { rotateZ: -5, duration: 0.08 });
        tl.to(".box", { y: 0, rotateZ: 0, duration: 0.15 });
    };

    const onMouseLeave = () => {
        tl.pause(0);
        tl.to(".box", { y: 0, rotate: 0, duration: 0.15 });
        tl.clear();
    };

    return (
        <div
            ref={container}
            className="relative flex-col h-[70vh] m-10 flex justify-center items-center"
        >
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="box relative flex flex-col items-center"
            >
                <div className="-z-10 absolute -top-5 flex">
                    <div className="flex justify-center items-center w-[40px] h-[50px] bg-black rounded-full translate-x-1 -rotate-45">
                        <div className="w-[75%] h-[75%] bg-[#FFE6A2] rounded-full" />
                    </div>
                    <div className="flex justify-center items-center w-[40px] h-[50px] bg-black rounded-full -translate-x-1 rotate-45">
                        <div className="w-[75%] h-[75%] bg-[#FFE6A2] rounded-full" />
                    </div>
                </div>
                <div className="flex justify-center w-[220px] h-[30px] bg-gray-500 rounded-lg border-2 border-black">
                    <div className="w-[20px] h-full bg-gray-700" />
                </div>
                <div className="flex justify-center w-[200px] h-[150px] bg-gray-400 rounded-bl-lg rounded-br-lg border-x-2 border-b-2 border-black">
                    <div className="w-[20px] h-full bg-gray-700" />
                </div>
            </div>
        </div>
    );
};

export default TracksSection;
