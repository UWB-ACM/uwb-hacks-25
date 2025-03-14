"use client";

import React from "react";
import Button from "@/src/components/Button";

function Page() {
    return (
        <div className="flex flex-col w-full items-center px-6 md:px-12 py-6 pt-[6rem] lg:pt-[8rem]">
            <div className="max-w-[1000px] flex flex-col items-center text-center">
                <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
                    {"Sponsor Hackathon Activities"}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            {"Enhance the Participant Experience"}
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            We are looking for sponsors to support various
                            activities that will enhance the participant
                            experience during the hackathon. These activities
                            include providing food and refreshments, organizing
                            fun games, and hosting networking lounges where
                            participants can interact with industry
                            professionals.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            {"Sponsor the Luncheon!"}
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            By sponsoring an activity, you will help create a
                            memorable and engaging experience for all
                            participants. Your contribution will not only
                            support the event but also showcase your commitment
                            to fostering innovation and community engagement.
                        </p>
                    </div>
                </div>

                <Button onClick={() => {}} className="text-[18px]">
                    Contact Us Here!
                </Button>
            </div>
        </div>
    );
}

export default Page;
