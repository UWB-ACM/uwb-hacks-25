"use client";

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
                            Got a fresh idea or want to do something special? We
                            welcome your input. From food and refreshments to
                            themed challenges and networking lounges, your
                            sponsorship will shape the hackathon’s atmosphere
                            and leave a lasting impression on participants.
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
