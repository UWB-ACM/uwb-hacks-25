import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CommitteeTab from "@/src/components/landing-page/(MeetTheTeamSectionComponents)/CommitteeTab";

interface CommitteeTabsProps {
    committees: { id: string; name: string }[];
    activeCommitteeId: string;
    setActiveCommitteeId: (id: string) => void;
}

const CommitteeTabs: React.FC<CommitteeTabsProps> = ({
    committees,
    activeCommitteeId,
    setActiveCommitteeId,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                containerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // Adjust for rounding errors
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            checkScroll(); // Initial check
            container.addEventListener("scroll", checkScroll);
        }

        // Handle window resize
        window.addEventListener("resize", checkScroll);

        return () => {
            if (container) {
                container.removeEventListener("scroll", checkScroll);
            }
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scrollLeft = () => {
        containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
        setTimeout(checkScroll, 300); // Ensure visibility updates after scrolling
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
        setTimeout(checkScroll, 300);
    };

    // Render all committee tabs
    const committeeCards = committees.map((committee) => (
        <CommitteeTab
            key={committee.id}
            committee={committee}
            isActive={activeCommitteeId === committee.id}
            onClick={() => setActiveCommitteeId(committee.id)}
        />
    ));

    // Split the committeeCards into two rows
    const firstRow = committeeCards.slice(
        0,
        Math.ceil(committeeCards.length / 2),
    );
    const secondRow = committeeCards.slice(
        Math.ceil(committeeCards.length / 2),
    );

    return (
        <div className="relative bg-white p-6 border-4 border-black">
            {/* Scroll arrows */}
            {showLeftArrow && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-4 border-black z-40 hover:bg-yellow-200 transition-transform"
                >
                    <FaChevronLeft className="text-black" />
                </button>
            )}
            {showRightArrow && (
                <button
                    onClick={scrollRight}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-4 border-black z-40 hover:bg-yellow-200 transition-transform"
                >
                    <FaChevronRight className="text-black" />
                </button>
            )}

            {/* Scroll container with ref attached here */}
            <div
                ref={containerRef}
                className="overflow-x-auto px-12 no-scrollbar"
            >
                {/* Transform layer to contain scaling */}
                <div className="grid grid-rows-2 gap-4 pb-3 pt-3 transform">
                    {/* First row of committees */}
                    <div
                        className={`flex gap-4 overflow-visible ${showLeftArrow || showRightArrow ? "justify-start" : "justify-center"}`}
                    >
                        {firstRow}
                    </div>

                    {/* Second row of committees */}
                    <div
                        className={`flex gap-4 overflow-visible ${showLeftArrow || showRightArrow ? "justify-start" : "justify-center"}`}
                    >
                        {secondRow}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommitteeTabs;
