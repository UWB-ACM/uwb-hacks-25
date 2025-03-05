import Image from "next/image";
import React from "react";

const SponsorsSection = () => {
    return (

        <div className="relative border-black py-[5rem] px-[2rem] mb-[1rem] mt-[1rem] justify-center grid sm:grid-cols-2 sm:gap-x-[5rem] sm:flex">
            {/* Background Image */}

            <Image
                className="hidden md:block absolute -z-10 md:object-cover"
                alt="background img"
                src={"/sponsorsSection/sponsor-bg.svg"}
                height={0}
                width={0}
                fill
            />

            {/* Sponsors Section */}
            <div className="flex flex-col items-center">
                <div className="justify-center items-center font-h1 text-[#49B2F8] mb-[2rem] text-5xl md:text-6xl lg:text-7xl text-center">
                    UWB HACKS 2025 SPONSORS
                </div>

                {/* sponsor grid */}
                <div className="grid md:grid-cols-3 justify-between items-center">
                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/sponsorsSection/uwb-stem.png"
                            alt="sponsor2"
                            width={500}
                            height={500}
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/sponsorsSection/avanade-logo.svg"
                            alt="sponsor3"
                            width={500}
                            height={500}
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/sponsorsSection/uwb-business.png"
                            alt="sponsor4"
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                </div>

                <div className="grid gap-[1rem] md:grid-cols-5 justify-items-center items-center">
                    {/* sponsor logo container, place logo w/ img inside of each of these divs */}
                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/sponsorsSection/redbull-logo.svg"
                            alt="sponsor1"
                            width={175}
                            height={175}
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/about/uwb-acm-logo.png"
                            alt="sponsor5"
                            width={175}
                            height={175}
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/about/uwb-acm-logo.png"
                            alt="sponsor6"
                            width={175}
                            height={175}
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/about/uwb-acm-logo.png"
                            alt="sponsor7"
                            width={175}
                            height={175}
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src="/about/uwb-acm-logo.png"
                            alt="sponsor8"
                            width={175}
                            height={175}
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorsSection;
