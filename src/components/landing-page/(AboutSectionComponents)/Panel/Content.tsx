import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PanelContentProps = {
    parentPanelId: string;
    children: React.ReactNode;
    className?: string;
    /**
     * Is this likely to be a long panel?
     */
    long?: boolean;
};

export default function PanelContent({
    parentPanelId,
    children,
    className,
    long,
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
                // Long panels need to kick in earlier
                // to avoid an uncomfortable delay.
                start: long ? "10% 80%" : "30% 80%",
            },
        });
        // parentPanelId only passed into dependency array to satisfy ESLint. value of parentPanelId will never be changed within this component
    }, [long, parentPanelId]);

    return (
        <div
            ref={panelContentRef}
            className={clsx("pt-6 px-6 md:pt-10 md:px-10", className)}
        >
            {children}
        </div>
    );
}
