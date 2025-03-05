import React from "react";

const FAQSection = () => {
    return (
        <div className="flex flex-col items-center p-4 md:p-10">
            <h2 className="font-h1 text-5xl md:text-7xl text-[#49B2F8] text-center">
                FAQ
            </h2>

            <div className="relative container bg-white border-2 border-black p-4 md:p-8 my-4 md:my-8">
                <h3 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                    1. How will UWB Hacks 2025 run?
                </h3>
                <p className="pl-4 md:pl-12 font-h3 text-sm md:text-base leading-6">
                    The hackathon will take place over a weekend, where
                    participants will form teams, brainstorm ideas, and build
                    projects that align with this year’s theme: Save the World
                    You will have access to mentors, workshops, and networking
                    opportunities to help bring your ideas to life.
                </p>

                <h3 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                    2. Do I have to be a UWB student to participate?
                </h3>
                <p className="pl-4 md:pl-12 font-h3 text-sm md:text-base leading-6">
                    No! UWB Hacks 2025 is open to students from any university
                    and high school students as well.
                </p>

                <h3 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                    3. Does it cost money to enter the hackathon?
                </h3>
                <p className="pl-4 md:pl-12 font-h3 text-sm md:text-base leading-6">
                    No! Participation is completely free.
                </p>

                <h3 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                    4. Do I need programming experience to participate?
                </h3>
                <p className="pl-4 md:pl-12 font-h3 text-sm md:text-base leading-6">
                    No prior programming experience is required! We welcome
                    participants of all skill levels and will provide workshops,
                    mentorship, and other learning opportunities.
                </p>

                <h3 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                    5. Do I need a team to register, and how many people can be
                    on a team?
                </h3>
                <p className="pl-4 md:pl-12 font-h3 text-sm md:text-base leading-6">
                    Yes. If you don’t have a team, we will provide opportunities
                    to form teams before the hackathon begins. Each team must
                    have 3 to 5 members—no exceptions. Teams that don’t meet
                    this requirement will be disqualified.
                </p>

                <h3 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                    6. What activities will take place aside from hacking?
                </h3>
                <p className="pl-4 md:pl-12 font-h3 text-sm md:text-base leading-6">
                    In addition to the hackathon, participants will have the
                    opportunity to attend interactive workshops, networking
                    sessions, and engaging activities. These will include
                    insightful talks from industry professionals and hands-on
                    learning experiences designed to align with this year's Save
                    the World theme.
                </p>
            </div>
        </div>
    );
};

export default FAQSection;
