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
    const handleNext = () => {
        if (selectedTrackIdx == tracks.length - 1) {
            setSelectedTrackIdx(0);
        } else {
            setSelectedTrackIdx(selectedTrackIdx + 1);
        }
    };

    const handlePrev = () => {
        if (selectedTrackIdx == 0) {
            setSelectedTrackIdx(tracks.length - 1);
        } else {
            setSelectedTrackIdx(selectedTrackIdx - 1);
        }
    };

    return (
        <div className="w-full flex items-center p-2 md:p-4 border-y-2 border-black">
            <button onClick={handlePrev}>
                <ChevronLeft className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] duration-200 hover:scale-110" />
            </button>

            <div className="grow text-center font-h1">
                <p className="text-xl md:text-2xl lg:text-3xl">
                    {tracks[selectedTrackIdx]["name"]}
                </p>
                <p className="text-lg md:text-xl lg:text-2xl">
                    {selectedTrackIdx + 1} / {tracks.length}
                </p>
            </div>

            <button onClick={handleNext}>
                <ChevronRight className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] duration-200 hover:scale-110" />
            </button>
        </div>
    );
}
