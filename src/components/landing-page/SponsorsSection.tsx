import Image from "next/image";
import SponsorBGImage from "@/public/sponsorsSection/sponsor-bg.svg";
import UWBStemImage from "@/public/sponsorsSection/uwb-stem.png";
import UWBBusinessImage from "@/public/sponsorsSection/uwb-business.png";
import AvanadeImage from "@/public/sponsorsSection/avanade-logo.svg";
import Link from "next/link";

const SponsorsSection = () => {
    return (
        <div className="relative bg-white border-black border-2 py-16 px-8 sm:mt-[10rem] mb-10 my-4 overflow-hidden">
            <Image
                className="absolute inset-0 -z-10 object-cover w-full h-full"
                alt="background img"
                src={SponsorBGImage}
                fill
            />

            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-[#49B2F8] text-5xl md:text-6xl text-center mb-20 font-h1">
                    UWB HACKS 2025 SPONSORS
                </h2>

                {/* Main sponsors row */}
                <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
                    <div className="flex justify-center items-center">
                        <Link href="https://www.uwb.edu/stem/" target="_blank">
                            <Image
                                src={UWBStemImage}
                                width={300}
                                height={100}
                                alt="UW Bothell School of STEM"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link href="https://www.avanade.com" target="_blank">
                            <Image
                                src={AvanadeImage}
                                width={350}
                                height={100}
                                alt="Avanade"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link
                            href="https://www.uwb.edu/business/"
                            target="_blank"
                        >
                            <Image
                                src={UWBBusinessImage}
                                width={300}
                                height={100}
                                alt="UW Bothell School of Business"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

                {/* Secondary sponsors row */}
                <div className="w-full flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        {/*
                        <Image
                            src={RedBullImage}
                            width={100}
                            height={80}
                            alt="Red Bull"
                            className="object-contain"
                        />
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorsSection;
