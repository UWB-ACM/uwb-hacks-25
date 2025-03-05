import React from "react";
import Button from "../../Button";

function SponsorInfo() {
    return (
        <div className="mt-10 grow bg-white border-[3px] border-black flex flex-col px-3 py-5 items-center">
            <p className="font-bold text-center font-h2 [font-size:calc(0.1rem_+_3vw)]">
                2025 UWB Hacks: Save the World!
            </p>
            <p className="text-center mt-5 mb-5 font-h3">
            This year, we are calling all students to unite, innovate, and create for good– with support from our inaugural sponsor, Avanade, and six interdisciplinary campus groups with ACM as the backbone.
Students will be tasked to align their project to specific tracks (subtopics) and judging criteria, while embracing the  theme: “Save the World.” 
Inspired by everyday heroes and the power of technology for good, we chose our theme to invite students to unleash their inner hero and make a meaningful impact.
This inclusive event encourages creativity and innovation, welcoming projects of all skill levels, from no-code to high-code solutions.
            </p>
            <Button className="text-[25px]" onClick={() => {}}>
                Learn More
            </Button>
        </div>
    );
}

export default SponsorInfo;
