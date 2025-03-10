import React from "react";
import Button from "../../Button";

function SponsorInfo() {
    return (
        <>
            <div className="mt-10 grow bg-white border-[3px] border-black flex flex-col px-3 py-5 items-center">
                <p className="font-bold text-center font-h2 [font-size:calc(0.1rem_+_3vw)]">
                    2025 UWB Hacks: Save the World!
                </p>
                <p className="text-center mt-5 mb-5 font-h3">
                    This year, we are calling all students to unite, innovate,
                    and create for good– with support from our inaugural
                    sponsor, Avanade, and seven interdisciplinary campus groups
                    with ACM as the backbone. Students will be tasked to align
                    their project to specific tracks (subtopics) and judging
                    criteria, while embracing the theme: “Save the World.”
                    Inspired by everyday heroes and the power of technology for
                    good, we chose our theme to invite students to unleash their
                    inner hero and make a meaningful impact. This inclusive
                    event encourages creativity and innovation, welcoming
                    projects of all skill levels, from no-code to high-code
                    solutions.
                </p>
                <Button className="text-[25px]" onClick={() => {}}>
                    Learn More
                </Button>
            </div>
            <div className="mt-10 grow bg-white border-[3px] border-black flex flex-col px-3 py-5 items-center">
                <p className="font-bold text-center font-h2 [font-size:calc(0.1rem_+_3vw)]">
                    Month of Hacking
                </p>
                <p className="text-center mt-5 mb-5 font-h3">
                    {`In April, we'll host a series of academic and fun activities
                    to prepare participants for the main event, with at least 2
                    events each week, totaling 8+ events. Some will be co-hosted
                    by fellow clubs and the rest are open for sponsors to host.
                    Hackeroons By participating in these events, students can
                    prepare for the hackathon and earn points through our
                    Hackeroons system, redeemable for prizes at the Hackeroon
                    booth on event day. Demo Day On the final day of the
                    hackathon, we’ll host a Demo Day alongside judging to
                    connect students with industry professionals. As a sponsor,
                    you will have direct access to find new talent.`}
                </p>
                <Button className="text-[25px]" onClick={() => {}}>
                    Learn More
                </Button>
            </div>
        </>
    );
}

export default SponsorInfo;
