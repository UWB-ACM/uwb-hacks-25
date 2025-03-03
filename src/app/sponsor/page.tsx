import React from "react";

function Sponsors() {
    return (
        <div className="flex flex-col w-screen items-center">
            <div className="max-w-[1000px] flex flex-col">
                <div className="text-center bg-white border-2 border-black p-6 md:p-8 m-4 md:m-8 shadow-lg px-4 overflow-x-auto">
                    <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                        Why Sponsor Us?
                    </h2>
                    <p className="pb-3 pl-6 md:pl-12 font-h3 text-sm md:text-base leading-6">
                        Your contributions bring talents and emerging leaders to
                        resolve real-world problems together, creating positive
                        impact to the community. By sponsoring our Hackathon,
                        you’ll access emerging talent, have a chance to elevate
                        your brand, and drive innovation and meaningful changes
                        across industries.
                    </p>
                </div>

                <div className="flex">
                    <div className="flex flex-col grow items-center text-center bg-white border-2 border-black p-2 mx-8 my-6 shadow-lg">
                        <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                            Access to Emerging Talent
                        </h2>
                        <p className="font-h3 text-sm md:text-base leading-6">
                            By participating in our event, you can identify
                            potential interns or full-time hires firsthand. Our
                            hackathon environment empowers students to use
                            creative thinking and supports rapid skill-building.
                            Your company gains an exclusive opportunity to shape
                            the next generation of tech leaders.
                        </p>
                    </div>
                    <div className="flex flex-col grow items-center text-center bg-white border-2 border-black p-2 mx-8 my-6 shadow-lg">
                        <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                            Elevate Your Brand
                        </h2>
                        <p className="font-h3 text-sm md:text-base leading-6">
                            Our hackathon reaches hundreds of students from UWB
                            and top-tier institutions across the Puget Sound
                            region and beyond. We are offering high visibility
                            through promotional materials, social media
                            outreach, and event branding. Sponsoring our
                            Hackathon sets your company apart as an industry
                            leader that values innovation and social
                            responsibility.{" "}
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col grow items-center text-center bg-white border-2 border-black p-2 mx-8 my-6 shadow-lg">
                        <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                            Drive Innovation and Community Impact
                        </h2>
                        <p className="font-h3 text-sm md:text-base leading-6">
                            Your support fosters the development of innovative
                            solutions by providing the resources and mentorship
                            that participants need to excel. You will have the
                            opportunity to receive real time feedback on your
                            products such as APIs or development tools. Your
                            contribution helps students to collaborate across
                            disciplines, tackle global challenges, and create
                            impactful results for a variety of industries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
