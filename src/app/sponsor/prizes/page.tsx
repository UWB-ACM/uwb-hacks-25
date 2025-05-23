"use client";

import React from "react";
import Button from "@/src/components/Button";

function Page() {
    return (
        <div className="flex flex-col w-full items-center px-6 md:px-12 py-12">
            <div className="max-w-[1000px] flex flex-col items-center text-center">
                <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
                    Sponsor Prizes
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            Sponsored Prizes
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            {`Support our hackathon by sponsoring prizes that reward top talent. Your sponsorship inspires creativity, drives innovation, and gives participants exposure to your organization's mission. We are flexible and open to discussions to tailor sponsorship opportunities to your goals.`}
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            Why Sponsor a Prize?
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            Sponsoring a prize boosts your brand, connects you
                            with emerging talent, and fuels groundbreaking
                            ideas. Your support fosters competition,
                            collaboration, and real-world impact. Let me know if
                            you need further tweaks!
                        </p>
                    </div>
                </div>

                <Button
                    href={
                        "https://docs.google.com/forms/d/e/1FAIpQLSeE5tYU3c8GZ20H1PPZS2-yjZ89tROgPMQRtsybsJ6j10iv4A/viewform?usp=sharing"
                    }
                    target="_blank"
                    fontSize={18}
                >
                    Contact Us Here!
                </Button>
            </div>
        </div>
    );
}

export default Page;
