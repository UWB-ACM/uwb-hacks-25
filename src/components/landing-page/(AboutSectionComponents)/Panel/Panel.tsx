import React, { useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PanelProps = {
    children: React.ReactNode;
    className?: string;
    panelBackground?: string;
    panelColor?: string;
};

export default function Panel({
    children,
    className = "",
    panelBackground,
    panelColor,
}: PanelProps) {
    const background = panelBackground
        ? { backgroundImage: `url(${panelBackground})` }
        : { backgroundColor: panelColor };

    useEffect(() => {
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={twMerge(
                clsx(
                    "relative w-full border-black border-2 bg-cover bg-center overflow-hidden",
                    className,
                ),
            )}
            style={background}
        >
            {children}
        </div>
    );
}
