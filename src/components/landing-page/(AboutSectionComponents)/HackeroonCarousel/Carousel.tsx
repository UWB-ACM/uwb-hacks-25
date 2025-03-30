"use client";

import React, { useState, useRef } from "react";

// For carousel
import hackeroon_prizes_data from "./hackeroonPrizes.json";
import gsap from "gsap";
import CarouselControls from "./CarouselControls";
import HackeroonItemCard from "./Card";

// For carousel controls
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HackeroonCarousel() {
    const [currIdx, setCurrIdx] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const hackeroonPrizes = hackeroon_prizes_data["hackeroon_prizes"];

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        gsap.to(cardRef.current, {
            x: "-200%",
            duration: 0.25,
            ease: "power3.inOut",
            onComplete: () => {
                if (currIdx == hackeroonPrizes.length - 1) {
                    setCurrIdx(0);
                } else {
                    setCurrIdx(currIdx + 1);
                }

                gsap.set(cardRef.current, { x: "200%" });

                gsap.to(cardRef.current, {
                    x: 0,
                    duration: 0.25,
                    ease: "power3.inOut",
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
            duration: 0.25,
            ease: "power3.inOut",
            onComplete: () => {
                if (currIdx == 0) {
                    setCurrIdx(hackeroonPrizes.length - 1);
                } else {
                    setCurrIdx(currIdx - 1);
                }

                gsap.set(cardRef.current, { x: "-200%" });
                gsap.to(cardRef.current, {
                    x: 0,
                    duration: 0.25,
                    ease: "power3.inOut",
                    onComplete: () => setIsAnimating(false),
                });
            },
        });
    };

    return (
        <div className="w-full p-[3%] flex justify-between overflow-hidden">
            {/* Prev Button */}
            <CarouselControls onClick={handlePrev}>
                <ChevronLeft className="w-full h-full text-white" />
            </CarouselControls>

            {/* Hackeroon Item Card Container */}
            <div className="w-[70%] flex justify-center items-center min-h-[300px]">
                <HackeroonItemCard
                    cardRef={cardRef}
                    hackeroonPrize={hackeroonPrizes[currIdx]}
                />
            </div>

            {/* Next Button */}
            <CarouselControls onClick={handleNext}>
                <ChevronRight className="w-full h-full text-white " />
            </CarouselControls>
        </div>
    );
}
