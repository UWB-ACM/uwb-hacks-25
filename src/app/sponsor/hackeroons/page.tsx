"use client"

import React from "react";
import Button from "@/src/components/Button";
function Page() {
    return (
        <div className="flex flex-col w-screen items-center">
            <div className="max-w-[800px] flex flex-col">
                <div className="text-center py-6 md:py-8 overflow-x-auto">
                    <h1 className="font-h1 text-4xl md:text-5xl">
                        {"Sponsor Our Hackeroon Prizes"}
                    </h1>
                    <div className="w-full border-2 border-black bg-white p-3 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        <h3 className="font-rubik-mono font-bold text-xl">
                            {"What's a Hackeroon?"}
                        </h3>
                        <p className="font-rubik-mono w-full p-6 font-h3 text-sm md:text-base ">
                            A Hackeroon is a playful, event-only currency given
                            to hackathon participants for active
                            involvement—like attending workshops or helping
                            teammates. Earn Hackeroons for your efforts, then
                            trade them for exclusive rewards, creating a more
                            interactive and memorable hackathon experience.
                        </p>
                    </div>
                    <div className="w-full border-2 border-black bg-white p-3 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        <h3 className="font-rubik-mono font-bold text-xl">
                            {"Sponsor a Prize!"}
                        </h3>
                        <p className="font-rubik-mono w-full p-6 font-h3 text-sm md:text-base ">
                            We invite sponsors to help power these rewards by
                            contributing prizes, cool perks, or unique
                            experiences. Your support fuels innovation,
                            celebrates participants, and amplifies your brand’s
                            presence at our event.
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
