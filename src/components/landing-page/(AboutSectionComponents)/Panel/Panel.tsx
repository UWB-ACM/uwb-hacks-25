import React from "react";
import clsx from "clsx";

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
            className={clsx(
                "relative w-full border-black border-2 bg-cover bg-center",
                className,
            )}
            style={background}
        >
            {children}
        </div>
    );
}
