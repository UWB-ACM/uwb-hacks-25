import React, { RefObject, useState } from "react";
import { Track } from "@/src/util/dataTypes";
import TracksNav from "./TracksNav";
import SelectedTrackInformation from "./SelectedTrackInformation";

type TracksProps = {
    tracks: Track[];
    tracksNavRef: RefObject<HTMLDivElement | null>;
    selectedTrackRef: RefObject<HTMLDivElement | null>;
};

export default function Tracks({
    tracks,
    tracksNavRef,
    selectedTrackRef,
}: TracksProps) {
    const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);

    return (
        <>
            {/* Use to select track */}
            <TracksNav
                tracks={tracks}
                tracksNavRef={tracksNavRef}
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
                selectedTrackRef={selectedTrackRef}
                selectedTrack={tracks[selectedTrackIdx]}
            />
        </>
    );
}
