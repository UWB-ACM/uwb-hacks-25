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
                        Join us in empowering the next generation of tech
                        leaders. UWB Hacks: Save the World brings together
                        talented hackers for an innovation-driven event that
                        promotes creativity, collaboration, diversity and
                        real-world impact.
                    </p>
                </div>

                <div className="flex">
                    <div className="flex flex-col grow items-center text-center bg-white border-2 border-black p-2 mx-8 my-6 shadow-lg">
                        <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                            📢 Elevate Your Brand
                        </h2>
                        <p className="font-h3 text-sm md:text-base leading-6">
                            Gain visibility among students from UWB and top-tier
                            institutions across the Puget Sound region.
                            Sponsoring our hackathon sets your company apart as
                            a leader in innovation and social responsibility.
                        </p>
                    </div>
                    <div className="flex flex-col grow items-center text-center bg-white border-2 border-black p-2 mx-8 my-6 shadow-lg">
                        <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                            🎯 Access Top Emerging Talent
                        </h2>
                        <p className="font-h3 text-sm md:text-base leading-6">
                            Meet and recruit bright, motivated students who are
                            ready to tackle real-world challenges. Our hackathon
                            environment allows companies to connect with
                            potential interns and hires.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col grow items-center text-center bg-white border-2 border-black p-2 mx-8 my-6 shadow-lg">
                        <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                            🚀 Drive Innovation & Community Impact{" "}
                        </h2>
                        <p className="font-h3 text-sm md:text-base leading-6">
                            Support creative solutions to global challenges by
                            providing mentorship, tools, and resources. Sponsors
                            can receive real-time feedback on APIs, development
                            tools, or products.
                        </p>
                    </div>
                    <div className="flex flex-col grow items-center text-center bg-white border-2 border-black p-2 mx-8 my-6 shadow-lg">
                        <h2 className="font-rubik-mono-one text-md md:text-lg font-stretch-condensed">
                            🤝 Engage with Hackers
                        </h2>
                        <p className="font-h3 text-sm md:text-base leading-6">
                            Host workshops, sponsor challenge tracks, or provide
                            proprietary tools to guide participants in building
                            impactful projects. Directly interact with students
                            and help shape the future of tech.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
