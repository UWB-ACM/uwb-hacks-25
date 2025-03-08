import Image from "next/image";
import React from "react";
import SponsorBGImage from "@/public/sponsorsSection/sponsor-bg.svg";
import UWBStemImage from "@/public/sponsorsSection/uwb-stem.png";
import UWBBusinessImage from "@/public/sponsorsSection/uwb-business.png";
import AvanadeImage from "@/public/sponsorsSection/avanade-logo.svg";
import RedBullImage from "@/public/sponsorsSection/redbull-logo.svg";
import UWBACMImage from "@/public/about/uwb-acm-logo.png";

const SponsorsSection = () => {
    return (
        <>
            <div className="h-full relative border-black py-[5rem] px-[2rem] mb-[1rem] mt-[1rem] justify-center grid sm:grid-cols-2 sm:gap-x-[5rem] sm:flex">
                {/* Background Image */}

                <Image
                    className="hidden md:block absolute -z-10 md:object-fill"
                    alt="background img"
                    src={SponsorBGImage}
                    fill
                />

                {/* Sponsors Section */}
                <div className="hidden md:block">
                    <DesktopSponsorsSection />
                </div>
                <div className="md:hidden">
                    <MobileSponsorsSection />
                </div>
            </div>
        </>
    );
};

const MobileSponsorsSection = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Sponsors Section */}
            <div className="flex flex-col items-center">
                <h2 className="justify-center items-center font-h1 text-[#49B2F8] mb-[2rem] text-5xl md:text-6xl lg:text-7xl text-center">
                    UWB HACKS 2025 SPONSORS
                </h2>

                {/* sponsor grid */}
                <div className="grid md:grid-cols-3 justify-between items-center">
                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBStemImage} width={300} alt="sponsor2" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src={AvanadeImage}
                            width={300}
                            alt="sponsor3"
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src={UWBBusinessImage}
                            width={300}
                            alt="sponsor4"
                        />
                    </div>
                </div>

                <div className="grid gap-[1rem] md:grid-cols-5 justify-items-center items-center">
                    {/* sponsor logo container, place logo w/ img inside of each of these divs */}
                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src={RedBullImage}
                            width={175}
                            alt="sponsor1"
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={175} alt="sponsor5" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={175} alt="sponsor6" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={175} alt="sponsor7" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={175} alt="sponsor8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const DesktopSponsorsSection = () => {
    return (
        <>
            <div className="absolute flex flex-col items-center h-[8%] w-[80%] top-[30%] left-[10%]">
                {/* sponsor grid */}
                <h2 className="justify-center items-center font-h1 text-[#49B2F8] mb-[2rem] md:text-5xl lg:text-5xl text-center">
                    UWB HACKS 2025 SPONSORS
                </h2>
            </div>
            <div className="absolute flex flex-col items-center h-[22%] w-[70%] top-[42%] left-[16%]">
                {/* sponsor grid */}
                <div className="grid md:grid-cols-3 justify-between items-center">
                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBStemImage} width={300} alt="sponsor2" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src={AvanadeImage}
                            width={300}
                            alt="sponsor3"
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src={UWBBusinessImage}
                            width={300}
                            alt="sponsor4"
                        />
                    </div>
                </div>

                <div className="grid gap-[1rem] md:grid-cols-5 justify-items-center items-center">
                    {/* sponsor logo container, place logo w/ img inside of each of these divs */}
                    <div className="flex justify-center items-center p-6 transition">
                        <Image
                            src={RedBullImage}
                            width={85}
                            alt="sponsor1"
                        ></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={85} alt="sponsor5" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={85} alt="sponsor6" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={85} alt="sponsor7" />
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src={UWBACMImage} width={85} alt="sponsor8" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default SponsorsSection;
