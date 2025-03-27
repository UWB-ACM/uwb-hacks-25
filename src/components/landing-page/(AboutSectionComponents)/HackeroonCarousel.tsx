"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

export default function HackeroonCarousel() {
    const [currIdx, setCurrIdx] = useState(0);
    const cardRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const hackeroonPrizes = [
        {
            name: "Adidas Fleece Hoodie",
            price: 200,
            image: "/about/uwb-acm-logo.png",
        },
        {
            name: "Wireless Bank Charger",
            price: 200,
            image: "/about/uwb-acm-logo.png",
        },
        { name: "Backpack", price: 200, image: "/about/uwb-acm-logo.png" },
        { name: "Lap Desk", price: 200, image: "/about/uwb-acm-logo.png" },
        {
            name: "Pickleball Set",
            price: 200,
            image: "/about/uwb-acm-logo.png",
        },
        {
            name: "Dual Handle Lunch Bag",
            price: 200,
            image: "/about/uwb-acm-logo.png",
        },
    ];

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        gsap.to(cardRef.current, {
            x: "-200%",
            duration: 0.5,
            ease: "back.inOut",
            onComplete: () => {
                if (currIdx == hackeroonPrizes.length - 1) {
                    setCurrIdx(0);
                } else {
                    setCurrIdx(currIdx + 1);
                }

                gsap.set(cardRef.current, { x: "200%" });

                gsap.to(cardRef.current, {
                    x: 0,
                    duration: 0.5,
                    ease: "back.inOut",
                    onComplete: () => setIsAnimating(false),
                });
            },
        });
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        gsap.to(cardRef.current, {
            x: "200%",
            duration: 0.5,
            ease: "back.inOut",
            onComplete: () => {
                if (currIdx == 0) {
                    setCurrIdx(hackeroonPrizes.length - 1);
                } else {
                    setCurrIdx(currIdx - 1);
                }

                gsap.set(cardRef.current, { x: "-200%" });
                gsap.to(cardRef.current, {
                    x: 0,
                    duration: 0.5,
                    ease: "back.inOut",
                    onComplete: () => setIsAnimating(false),
                });
            },
        });
    };

    return (
        <div className="w-full p-[3%] flex justify-between overflow-hidden">
            {/* Prev Button */}
            <div className="z-[5] w-[15%] flex justify-center items-center">
                <button
                    onClick={handlePrev}
                    className="w-full md:w-[75%] lg:w-full xl:w-[80%] aspect-square bg-black rounded-lg"
                >
                    <ChevronLeft className="w-full h-full text-white" />
                </button>
            </div>

            {/* Hackeroon Item Card Container */}
            <div className="w-[70%] flex justify-center items-center min-h-[300px]">
                {/* Hackeroon Item Card */}
                <div
                    // key={currIdx}
                    ref={cardRef}
                    className="item-card w-[80%] p-4 rounded-lg bg-[#FFCA3A]"
                >
                    {/* Prize Name */}
                    <p className="text-center font-bold text-lg md:text-xl lg:text-2xl">
                        {hackeroonPrizes[currIdx].name}
                    </p>
                    {/* Prize Image */}
                    <div className="w-full p-4 mt-2 bg-gray-200 flex justify-center rounded-md border border-black">
                        <Image
                            src={hackeroonPrizes[currIdx].image}
                            alt={"Image of " + hackeroonPrizes[currIdx].name}
                            width={100}
                            height={100}
                        />
                    </div>
                    {/* Prize Prize */}
                    <p className="text-center mt-2">
                        {hackeroonPrizes[currIdx].price} Hackeroons
                    </p>
                </div>
            </div>

            {/* Next Button */}
            <div className="z-[5] w-[15%] flex justify-center items-center">
                <button
                    onClick={handleNext}
                    className="w-full md:w-[75%] lg:w-full xl:w-[80%] aspect-square bg-black text-white rounded-lg"
                >
                    <ChevronRight className="w-full h-full text-white " />
                </button>
            </div>
        </div>
    );
}
