import clsx from "clsx";
import React from "react";

type PanelContentProps = {
    children: React.ReactNode;
    className?: string;
};

export default function PanelContent({
    children,
    className,
}: PanelContentProps) {
    return <div className={clsx("p-6", className)}>{children}</div>;
}
