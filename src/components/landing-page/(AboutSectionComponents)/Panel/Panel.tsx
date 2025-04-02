import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

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
