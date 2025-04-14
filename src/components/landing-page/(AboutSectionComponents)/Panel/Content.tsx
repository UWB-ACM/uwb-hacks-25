import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PanelContentProps = {
    children: React.ReactNode;
    className?: string;
};

export default function PanelContent({
    children,
    className,
}: PanelContentProps) {
    const panelContentRef = useRef(null);

    useEffect(() => {
        if (!panelContentRef) return;

        const panelContent = panelContentRef.current;

        gsap.set(panelContent, { scale: 0.1, opacity: 0 });

        gsap.to(panelContent, {
            delay: 0.2,
            scale: 1,
            opacity: 1,
            duration: 0.15,
            ease: "power2.in",
            scrollTrigger: {
                trigger: panelContent,
                start: "70% 90%",
                markers: true,
            },
        });
    }, []);

    return (
        <div ref={panelContentRef} className={clsx("p-6 md:p-10", className)}>
            {children}
        </div>
    );
}
