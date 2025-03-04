import Image from "next/image";
import React from "react";

const SponsorsSection = () => {
    return (
        <div className="bg-[#FBE4A6] border-black border-[0.25rem] p-[5rem] mb-[1rem] mt-[1rem] justify-center grid sm:grid-cols-2 sm:gap-x-[5rem] sm:flex">
            {/* Sponsors Section */}
            <div className="flex flex-col items-center">
                <div className="justify-center items-center font-h1 text-[#49B2F8] mb-[2rem] text-5xl md:text-6xl lg:text-7xl text-center">
                    UWB HACKS 2025 SPONSORS
                </div>

                {/* sponsor grid */}
                <div className="grid gap-3 md:grid-cols-5 justify-items-center items-center">
                    {/* sponsor logo container, place logo w/ img inside of each of these divs */}
                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor1" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor2" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor3" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor4" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor5" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor6" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor7" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor8" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor9" width={100} height={100}></Image>
                    </div>

                    <div className="flex justify-center items-center p-6 transition">
                        <Image src="/globe.svg" alt="sponsor10" width={100} height={100}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorsSection;
