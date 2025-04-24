import React, { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Track } from "@/src/util/dataTypes";

type TracksNavHeaderProps = {
    tracks: Track[];
    selectedTrackIdx: number;
    setSelectedTrackIdx: Dispatch<SetStateAction<number>>;
};

export default function TracksNavHeader({
    tracks,
    selectedTrackIdx,
    setSelectedTrackIdx,
}: TracksNavHeaderProps) {
    return (
        <div className="w-full flex flex-wrap items-center bg-black">
            {tracks.map((track, idx) => (
                <button
                    key={idx}
                    onClick={() => setSelectedTrackIdx(idx)}
                    className={`track font-h1 text-xl md:text-2xl grow px-4 py-2 border-2 border-black bg-white duration-200 ${idx === selectedTrackIdx ? "hover:bg-neutral-300" : "hover:bg-neutral-100"} ${idx === selectedTrackIdx && "bg-neutral-300"}`}
                >
                    {track.name}
                </button>
            ))}
        </div>
    );
}
