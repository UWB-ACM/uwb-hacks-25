import React from "react";
import Button from "../Button";

const TracksSection = () => {
    return (
        <div className="h-full border-black border-[0.25rem] p-[10rem] mb-[1rem] mt-[1rem] grid place-content-center">
            <Button
                onClick={() => {
                    console.log("clicked");
                }}
            >
                Discord
            </Button>
        </div>
    );
};

export default TracksSection;
