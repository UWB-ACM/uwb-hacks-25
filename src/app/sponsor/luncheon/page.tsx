"use client"

import React from "react";
import Button from "@/src/components/Button";

function Page() {
    return (
        <div className="flex flex-col w-full items-center px-6 md:px-12 py-12">
            <div className="max-w-[1000px] flex flex-col items-center text-center">
                <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
                    {"Sponsor Our Luncheon"}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            {"What's the Luncheon?"}
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            On Sunday, 4/27, the last day of the hackathon,
                            after the first round of judging, we are hosting a
                            big lunch in the{" "}
                            <a
                                className="text-[blue]"
                                href="https://maps.app.goo.gl/d76i3LhvFGN3WttQA"
                            >
                                Plaza
                            </a>
                            . This is a great opportunity for participants to
                            network with industry professionals about their
                            projects.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            {"Sponsor the Luncheon!"}
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            We invite sponsors to support this event by
                            providing food, refreshments, and activities. Your
                            contribution will enhance the networking experience
                            and leave a lasting impression on participants.
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
