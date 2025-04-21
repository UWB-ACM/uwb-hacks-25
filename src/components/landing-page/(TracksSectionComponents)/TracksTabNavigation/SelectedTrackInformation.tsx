import React from "react";
import { Track } from "@/src/util/dataTypes";

type SelectedTrackInformationProps = {
    selectedTrack: Track;
};

export default function SelectedTrackInformation({
    selectedTrack,
}: SelectedTrackInformationProps) {
    return (
        <div className="p-3 md:p-6">
            <p className="text-center font-h3 font-bold tracking-wider md:text-lg lg:text-xl">
                {selectedTrack.question}
            </p>
            <p>{selectedTrack.description}</p>
            <p>{selectedTrack.noCodeExample}</p>
            <p>{selectedTrack.lowCodeExample}</p>
        </div>
    );
}
