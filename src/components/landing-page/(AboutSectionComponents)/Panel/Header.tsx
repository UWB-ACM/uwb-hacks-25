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
    as?: "h1" | "h2" | "h3" | undefined;
};

export default function PanelHeader({
    children,
    isSectionHeader = false,
    className,
    as,
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

    const props = {
        ref: headerRef,
        className: twMerge(
            clsx(
                `w-full lg:w-fit p-6 bg-white border-black border-b-2 border-r-0 lg:border-r-2 font-h1 text-center ${isSectionHeader ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`,
                className,
            ),
        ),
    };

    switch (as) {
        case "h1": {
            return <h1 {...props}>{children}</h1>;
        }
        case "h2": {
            return <h2 {...props}>{children}</h2>;
        }
        case "h3": {
            return <h3 {...props}>{children}</h3>;
        }
        default: {
            return <div {...props}>{children}</div>;
        }
    }
}
