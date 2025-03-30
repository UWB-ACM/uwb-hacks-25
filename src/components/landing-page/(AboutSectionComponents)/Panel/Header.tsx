"use client";

import React, { useRef, useState, useEffect } from "react";

type PanelHeaderProps = {
    children: React.ReactNode;
};

export default function PanelHeader({ children }: PanelHeaderProps) {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const [headerWidth, setHeaderWidth] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        if (!headerRef.current) return;

        setHeaderWidth(
            Math.floor(headerRef.current.getBoundingClientRect().width / 2.5),
        );
        setHeaderHeight(
            Math.floor(headerRef.current.getBoundingClientRect().height / 2),
        );
    }, []);

    return (
        <div
            ref={headerRef}
            className="z-[10] absolute"
            style={{ top: -headerHeight, left: -headerWidth }}
        >
            {children}
        </div>
    );
}
