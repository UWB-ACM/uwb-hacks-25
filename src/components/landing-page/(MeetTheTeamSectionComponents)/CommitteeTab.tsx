import React from "react";

interface CommitteeTabProps {
    committee: { id: string; name: string };
    isActive: boolean;
    onClick: () => void;
}

const CommitteeTab: React.FC<CommitteeTabProps> = ({
    committee,
    isActive,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`relative flex-shrink-0 px-5 py-2 text-md sm:text-lg font-bold border-4 shadow-lg transition-transform
                ${
                    isActive
                        ? "bg-yellow-300 border-black scale-105 z-30"
                        : "bg-red-300 border-black hover:bg-yellow-200 hover:scale-105 z-20"
                }`}
        >
            <span
                className={`absolute -bottom-1 left-0 w-full h-[6px] bg-black ${isActive ? "" : "opacity-50"}`}
            />
            {committee.name}
        </button>
    );
};

export default CommitteeTab;
