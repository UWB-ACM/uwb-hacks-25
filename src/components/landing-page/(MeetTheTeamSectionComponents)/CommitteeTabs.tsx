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
    return (
        <div className="justify-center flex flex-wrap gap-4 relative">
            {committees.map((committee) => (
                <button
                    key={committee.id}
                    onClick={() => setActiveCommitteeId(committee.id)}
                    className={`relative px-6 py-2 text-lg font-bold border-4 shadow-lg transition-all ${
                        activeCommitteeId === committee.id
                            ? "bg-yellow-300 border-black scale-105"
                            : "bg-red-300 border-black hover:bg-yellow-200"
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
    );
};

export default CommitteeTabs;
