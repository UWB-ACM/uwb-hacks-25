import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlyingHusky() {
    useEffect(() => {
        gsap.set(".flyingHusky", {
            x: "-100vw",
            y: "50vh",
            rotation: "-30deg",
            scale: 0.7,
        });

        gsap.to(".flyingHusky", {
            delay: 0.8,
            duration: 2,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            ease: "power1.inOut",
            motionPath: {
                path: [
                    { x: "-80vw", y: "40vh", rotation: "-20deg", scale: 0.75 },
                    { x: "-40vw", y: "-30vh", rotation: "10deg", scale: 0.85 },
                    { x: "-20vw", y: "-20vh", rotation: "5deg", scale: 0.9 },
                    { x: "-10vw", y: "-10vh", rotation: 0, scale: 0.95 },
                    { x: 0, y: 0, rotation: 0, scale: 1 },
                ],
                curviness: 1.5,
                autoRotate: true,
            },
            scrollTrigger: {
                trigger: ".aboutSectionContainer",
                start: "top 80%",
            },
        });

        gsap.to(".flyingHusky", {
            delay: 2,
            repeat: -1,
            duration: 2.25,
            ease: "linear",
            keyframes: { y: [0, "-15px", 0] },
        });
    }, []);

    return (
        <div className="relative">
            <Image
                className="flyingHusky"
                src="/about/husky.png"
                alt="Husky"
                width={350}
                height={350}
            />
        </div>
    );
}
