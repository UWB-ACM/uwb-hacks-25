import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FunFactProps = {
    src: string;
    alt: string;
};

export default function FunFact({ src, alt }: FunFactProps) {
    useEffect(() => {
        gsap.set(".funFact", { scale: 0, rotate: 0 });

        gsap.to(".funFact", {
            delay: 0.5,
            stagger: 0.3,
            duration: 0.35,
            ease: "bounce",
            scale: 1,
            scrollTrigger: {
                trigger: "#funFactsContainer",
                start: "65% 90%",
            },
        });
    }, []);

    return (
        <div className="funFact w-full relative">
            <Image
                className="w-full max-h-[160px] md:max-h-none md:h-auto"
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
        </div>
    );
}
