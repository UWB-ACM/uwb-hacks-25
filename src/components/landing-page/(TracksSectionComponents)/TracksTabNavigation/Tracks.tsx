import React, { useState } from "react";
import { Track } from "@/src/util/dataTypes";
import TracksNav from "./TracksNav";
import SelectedTrackInformation from "./SelectedTrackInformation";

type TracksProps = {
    tracks: Track[];
    className?: string;
};

export default function Tracks({ tracks, className }: TracksProps) {
    const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);

    return (
        <div className={className}>
            {/* Use to select track */}
            <TracksNav
                tracks={tracks}
                selectedTrackIdx={selectedTrackIdx}
                setSelectedTrackIdx={setSelectedTrackIdx}
            />

            {/*
                Selected Track Information
                - question
                - description
                - examples
                    - no code
                    - low code / code
            */}
            <SelectedTrackInformation
                selectedTrack={tracks[selectedTrackIdx]}
            />
        </div>
    );
}
