import React, { Dispatch, RefObject, SetStateAction } from "react";
import { Track } from "@/src/util/dataTypes";

type TracksNavHeaderProps = {
    tracks: Track[];
    tracksNavRef: RefObject<HTMLDivElement | null>;
    selectedTrackIdx: number;
    setSelectedTrackIdx: Dispatch<SetStateAction<number>>;
};

export default function TracksNavHeader({
    tracks,
    tracksNavRef,
    selectedTrackIdx,
    setSelectedTrackIdx,
}: TracksNavHeaderProps) {
    return (
        <div
            ref={tracksNavRef}
            className="w-full flex flex-wrap items-center bg-black"
        >
            {tracks.map((track, idx) => (
                <button
                    key={idx}
                    onClick={() => setSelectedTrackIdx(idx)}
                    className={`track font-h1 text-xl md:text-2xl grow px-4 py-2 border-2 border-black duration-300 ${idx === selectedTrackIdx ? "bg-[#FFCA3A] hover:bg-[#FFCA3A]" : "bg-white hover:bg-neutral-200"}`}
                >
                    {track.name}
                </button>
            ))}
        </div>
    );
}
