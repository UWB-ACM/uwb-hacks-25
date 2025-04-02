import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PanelHeaderProps = {
    children: React.ReactNode;
    isSectionHeader?: boolean;
    className?: string;
};

export default function PanelHeader({
    children,
    isSectionHeader = false,
    className,
}: PanelHeaderProps) {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;

        if (header) {
            gsap.set(header, { y: "-100%" });

            const animation = gsap.to(header, {
                duration: 0.4,
                ease: "power2.out",
                y: 0,
                scrollTrigger: {
                    trigger: header,
                    start: "bottom 65%",
                },
            });

            return () => {
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
                animation.kill();
            };
        }
    }, []);

    return (
        <div
            ref={headerRef}
            className={twMerge(
                clsx(
                    `w-full lg:w-fit p-6 bg-white border-black border-b-2 border-r-0 lg:border-r-2 font-h1 text-center ${isSectionHeader ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`,
                    className,
                ),
            )}
        >
            {children}
        </div>
    );
}
