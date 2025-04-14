import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PanelHeaderProps = {
    id: string;
    children: React.ReactNode;
    isSectionHeader?: boolean;
    className?: string;
    as?: "h1" | "h2" | "h3" | undefined;
};

export default function PanelHeader({
    id,
    children,
    isSectionHeader = false,
    className,
    as,
}: PanelHeaderProps) {
    const headerRef = useRef(null);

    useEffect(() => {
        if (!headerRef.current) return;

        const header = headerRef.current;

        gsap.set(header, { y: "-100%" });

        gsap.to(header, {
            duration: 0.4,
            ease: "expo.out",
            y: 0,
            scrollTrigger: {
                trigger: `#${id}`,
                start: "30% 80%",
            },
        });
        // id only passed into dependency array to satisfy ESLint. value of id will never be changed within this component
    }, [id]);

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
