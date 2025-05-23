import React from "react";
import Button from "../../Button";

function SponsorInfo() {
    return (
        <>
            <div className="mt-10 grow bg-white border-[3px] border-black flex flex-col p-4  items-center">
                <p className="font-bold text-center font-h2 [font-size:calc(0.1rem_+_3vw)]">
                    2025 UWB Hacks: Save the World!
                </p>
                <p className="text-center mt-5 mb-5 font-h3">
                    We invite students to unite, innovate, and create for good
                    with support from Avanade and seven campus groups, led by
                    ACM. Participants will align projects to tracks under the
                    theme: “Save the World,” embracing technology&apos;s power
                    for good. All skill levels are welcome, from no-code to
                    high-code solutions.
                </p>
                <Button
                    href={
                        "https://uwb-hacks-save-the-world.devpost.com/project-gallery"
                    }
                    target="_blank"
                    fontSize={23}
                >
                    View Projects!
                </Button>
            </div>
            <div className="mt-10 grow bg-white border-[3px] border-black flex flex-col p-4 items-center">
                <p className="font-bold text-center font-h2 [font-size:calc(0.1rem_+_3vw)]">
                    Month of Hacking
                </p>
                <p className="text-center mt-5 mb-5 font-h3">
                    {`In April, we'll host a series of academic and fun activities to prepare participants for the main event, with at least 2 events each week, totaling 8+ events.  Some will be co-hosted by fellow clubs and the rest are open for sponsors to host.`}
                </p>
                <Button href={"/month-of-hacking"} fontSize={25}>
                    Learn More
                </Button>
            </div>
        </>
    );
}

export default SponsorInfo;
