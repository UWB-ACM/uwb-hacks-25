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
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };

    return (
        <div className="relative bg-white p-4 border-4 border-black rounded-lg shadow-comic overflow-visible">
            {/* Scroll arrows with comic book style */}
            <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-4 border-black z-20 hover:bg-yellow-200 transition-all"
            >
                <FaChevronLeft className="text-black" />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-4 border-black z-20 hover:bg-yellow-200 transition-all"
            >
                <FaChevronRight className="text-black" />
            </button>

            {/* Scrollable container with padding */}
            <div
                ref={containerRef}
                className="grid grid-rows-2 gap-3 overflow-x-auto no-scrollbar px-12 overflow-visible"
            >
                {/* First row of tabs */}
                <div className="flex gap-3">
                    {committees.slice(0, Math.ceil(committees.length / 2)).map((committee) => (
                        <button
                            key={committee.id}
                            onClick={() => setActiveCommitteeId(committee.id)}
                            className={`relative flex-shrink-0 px-4 py-1 sm:px-6 sm:py-2 text-base sm:text-lg font-bold border-4 shadow-lg transition-all ${
                                activeCommitteeId === committee.id
                                    ? "bg-yellow-300 border-black scale-105 z-10"
                                    : "bg-red-300 border-black hover:bg-yellow-200 hover:scale-105 hover:z-10"
                            }`}
                        >
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-[6px] bg-black ${
                                    activeCommitteeId === committee.id
                                        ? ""
                                        : "opacity-50"
                                }`}
                            />
                            {committee.name}
                        </button>
                    ))}
                </div>

                {/* Second row of tabs */}
                <div className="flex gap-3">
                    {committees.slice(Math.ceil(committees.length / 2)).map((committee) => (
                        <button
                            key={committee.id}
                            onClick={() => setActiveCommitteeId(committee.id)}
                            className={`relative flex-shrink-0 px-4 py-1 sm:px-6 sm:py-2 text-base sm:text-lg font-bold border-4 shadow-lg transition-all ${
                                activeCommitteeId === committee.id
                                    ? "bg-yellow-300 border-black scale-105 z-10"
                                    : "bg-red-300 border-black hover:bg-yellow-200 hover:scale-105 hover:z-10"
                            }`}
                        >
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-[6px] bg-black ${
                                    activeCommitteeId === committee.id
                                        ? ""
                                        : "opacity-50"
                                }`}
                            />
                            {committee.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommitteeTabs;