"use client";

import React from "react";
import Button from "@/src/components/Button";
function Page() {
    return (
        <div className="flex flex-col w-screen items-center">
            <div className="max-w-[800px] flex flex-col">
                <div className="text-center py-6 md:py-8 overflow-x-auto">
                    <h1 className="font-h1 text-4xl md:text-5xl">
                        {"Sponsor Our Grand Prizes"}
                    </h1>
                    <div className="w-full border-2 border-black bg-white p-3 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        <h3 className="font-rubik-mono font-bold text-xl">
                            {"What's a Grand Prize?"}
                        </h3>
                        <p className="w-full p-6 font-h3 text-sm md:text-base ">
                            A Grand Prize is the pinnacle award at a hackathon,
                            honoring the most outstanding project. It often
                            comes with exclusive perks or opportunities, serving
                            as a launchpad for the winning team’s innovation
                            journey.
                        </p>
                    </div>
                    <div className="w-full border-2 border-black bg-white p-3 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        <h3 className="font-rubik-mono font-bold text-xl">
                            {"Sponsor a Grand Prize!"}
                        </h3>
                        <p className="w-full p-6 font-h3 text-sm md:text-base ">
                            We invite sponsors to add excitement by offering a
                            compelling grand prize—anything from advanced tech
                            gear to mentorship sessions. Your contribution
                            energizes the hackathon, showcases your support for
                            emerging talent, and leaves a lasting impact.
                        </p>
                        <Button className="text-[18px]" onClick={() => {}}>
                            Contact us here!
                        </Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
