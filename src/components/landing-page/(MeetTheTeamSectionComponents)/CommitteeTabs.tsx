import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

    const scrollLeft = () => {
        containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="relative bg-white p-6 border-4 border-black">
            {/* Scroll arrows */}
            <button
                onClick={scrollLeft}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-4 border-black z-40 hover:bg-yellow-200 transition-transform"
            >
                <FaChevronLeft className="text-black" />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-4 border-black z-40 hover:bg-yellow-200 transition-transform"
            >
                <FaChevronRight className="text-black" />
            </button>

            {/* Scroll container with ref attached here */}
            <div
                ref={containerRef}
                className="overflow-x-auto no-scrollbar px-12"
            >
                {/* Transform layer to contain scaling */}
                <div className="grid grid-rows-2 gap-4 pb-3 pt-3 transform">
                    {/* First row of committees */}
                    <div className="flex gap-4 overflow-visible">
                        {committees.slice(0, Math.ceil(committees.length / 2)).map((committee) => (
                            <button
                                key={committee.id}
                                onClick={() => setActiveCommitteeId(committee.id)}
                                className={`relative flex-shrink-0 px-5 py-2 text-lg font-bold border-4 shadow-lg transition-transform
                                    ${activeCommitteeId === committee.id
                                        ? "bg-yellow-300 border-black scale-105 z-30"
                                        : "bg-red-300 border-black hover:bg-yellow-200 hover:scale-105 z-20"
                                    }`}
                            >
                                <span className={`absolute -bottom-1 left-0 w-full h-[6px] bg-black ${activeCommitteeId === committee.id ? "" : "opacity-50"}`} />
                                {committee.name}
                            </button>
                        ))}
                    </div>

                    {/* Second row of committees */}
                    <div className="flex gap-4 overflow-visible">
                        {committees.slice(Math.ceil(committees.length / 2)).map((committee) => (
                            <button
                                key={committee.id}
                                onClick={() => setActiveCommitteeId(committee.id)}
                                className={`relative flex-shrink-0 px-5 py-2 text-lg font-bold border-4 shadow-lg transition-transform
                                    ${activeCommitteeId === committee.id
                                        ? "bg-yellow-300 border-black scale-105 z-30"
                                        : "bg-red-300 border-black hover:bg-yellow-200 hover:scale-105 z-20"
                                    }`}
                            >
                                <span className={`absolute -bottom-1 left-0 w-full h-[6px] bg-black ${activeCommitteeId === committee.id ? "" : "opacity-50"}`} />
                                {committee.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommitteeTabs;