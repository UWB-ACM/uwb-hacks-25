import React, { RefObject } from "react";
import { Track } from "@/src/util/dataTypes";

type SelectedTrackInformationProps = {
    selectedTrackRef: RefObject<HTMLDivElement | null>;
    selectedTrack: Track;
};

export default function SelectedTrackInformation({
    selectedTrackRef,
    selectedTrack,
}: SelectedTrackInformationProps) {
    return (
        <div ref={selectedTrackRef} className="p-3 md:p-6 space-y-4">
            <div>
                <p className="font-h2 font-bold tracking-wider text-center text-xl md:text-2xl">
                    {selectedTrack.question}
                </p>
                <p className="mx-auto text-center md:w-3/4 md:text-lg">
                    {selectedTrack.description}
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-y-1 md:gap-x-6 lg:gap-x-4">
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="font-bold font-h2 text-lg md:text-xl text-[#49B2F8]">
                        {selectedTrack.name + ": "} No Code Example
                    </p>
                    <p className="md:text-lg">{selectedTrack.noCodeExample}</p>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="font-bold font-h2 text-lg md:text-xl text-[#49B2F8]">
                        {selectedTrack.name + ": "} Code Example
                    </p>
                    <p className="md:text-lg">{selectedTrack.lowCodeExample}</p>
                </div>
            </div>
        </div>
    );
}
