"use client";

import React from "react";
import Button from "@/src/components/Button";

function Page() {
    return (
        <div className="flex flex-col w-full items-center px-6 md:px-12 py-6 pt-[6rem] lg:pt-[8rem]">
            <div className="max-w-[1000px] flex flex-col items-center text-center">
                <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
                    Sponsor a Hackathon Track
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            Drive Innovation in Your Industry
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            We are seeking sponsors to support specific tracks
                            in our hackathon, such as business, biotech, and
                            entertainment. By sponsoring a track, you provide
                            participants with the opportunity to tackle
                            real-world challenges in your industry while gaining
                            exposure to fresh ideas and talent.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            Why Sponsor a Track?
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            Sponsoring a track allows your organization to be at
                            the forefront of innovation, mentor emerging talent,
                            and gain brand recognition among passionate and
                            skilled participants. Your support will help shape
                            the future of technology while fostering
                            collaboration and creativity.
                        </p>
                    </div>
                </div>

                <Button
                    href={
                        "https://docs.google.com/forms/d/e/1FAIpQLSeE5tYU3c8GZ20H1PPZS2-yjZ89tROgPMQRtsybsJ6j10iv4A/viewform?usp=sharing"
                    }
                    target="_"
                    fontSize={18}
                >
                    Contact Us Here!
                </Button>
            </div>
        </div>
    );
}

export default Page;
