import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlyingHusky() {
    useEffect(() => {
        gsap.set(".flyingHusky", { y: "-125%" });

        gsap.to(".flyingHusky", {
            keyframes: {
                y: ["-150%", "-100%", "-50%", "0"],
                x: ["-25%", "-50%", "-25%", "0"],
            },
            delay: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".flyingHusky",
                start: "bottom 40%",
                markers: true,
            },
        });
    }, []);

    return (
        <Image
            className="flyingHusky"
            src="/about/husky.png"
            alt="Husky"
            width={350}
            height={350}
        />
    );
}
