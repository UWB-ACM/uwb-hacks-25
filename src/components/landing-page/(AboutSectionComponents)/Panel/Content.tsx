import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PanelContentProps = {
    parentPanelId: string;
    children: React.ReactNode;
    className?: string;
};

export default function PanelContent({
    parentPanelId,
    children,
    className,
}: PanelContentProps) {
    const panelContentRef = useRef(null);

    useEffect(() => {
        if (!panelContentRef.current) return;

        const panelContent = panelContentRef.current;

        gsap.set(panelContent, { scale: 0.1, opacity: 0 });

        gsap.to(panelContent, {
            delay: 0.3,
            scale: 1,
            opacity: 1,
            duration: 0.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: `#${parentPanelId}`,
                start: "30% 80%",
            },
        });
        // parentPanelId only passed into dependency array to satisfy ESLint. value of parentPanelId will never be changed within this component
    }, [parentPanelId]);

    return (
        <div ref={panelContentRef} className={clsx("p-6 md:p-10", className)}>
            {children}
        </div>
    );
}
