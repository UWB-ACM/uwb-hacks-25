import React, { useState } from "react";
import { Track } from "@/src/util/dataTypes";
import TracksNav from "./TracksNav";
import SelectedTrackInformation from "./SelectedTrackInformation";

type TracksProps = {
    tracks: Track[];
};

export default function Tracks({ tracks }: TracksProps) {
    const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);

    return (
        <>
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
        </>
    );
}
