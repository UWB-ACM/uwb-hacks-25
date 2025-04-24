import React, { RefObject, useState } from "react";
import { Track } from "@/src/util/dataTypes";
import TracksNav from "./TracksNav";
import SelectedTrackInformation from "./SelectedTrackInformation";

type TracksProps = {
    tracksRef: RefObject<HTMLDivElement | null>;
    tracks: Track[];
};

export default function Tracks({ tracksRef, tracks }: TracksProps) {
    const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);

    return (
        <div ref={tracksRef}>
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
