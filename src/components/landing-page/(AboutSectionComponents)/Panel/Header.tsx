import clsx from "clsx";
import React from "react";

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
    return (
        <div
            className={clsx(
                `w-full lg:w-fit p-6 bg-white border-black border-b-2 border-r-0 lg:border-r-2 font-h1 text-center ${isSectionHeader ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`,
                className,
            )}
        >
            {children}
        </div>
    );
}
