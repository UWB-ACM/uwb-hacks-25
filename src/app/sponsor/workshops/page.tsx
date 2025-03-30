"use client";

import React from "react";
import Button from "@/src/components/Button";
import Link from "next/link";
function Page() {
    return (
        <div className="flex flex-col w-full items-center px-6 md:px-12 py-12 sm:mt-[10rem]">
            <div className="max-w-[1000px] flex flex-col items-center text-center">
                <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
                    Sponsor a Workshop
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            Engage Directly with Participants
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            Sponsoring a workshop allows you to interact with
                            participants, share expertise, and provide hands-on
                            guidance. Whether it’s a technical deep dive, a
                            business case study, or an interactive demo, your
                            workshop will help shape the next generation of
                            innovators.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#d62e2e]">
                            WARNING: Limited Availability
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            Due to the tight schedule of the 3 day event. We
                            have very few spots available for workshops. Though,
                            we still encourage you to reach out to us if you are
                            interested in sponsoring a workshop. We will do our
                            best to accommodate your request.
                        </p>
                    </div>
                </div>

                <Link
                    href={
                        "https://docs.google.com/forms/d/e/1FAIpQLSeE5tYU3c8GZ20H1PPZS2-yjZ89tROgPMQRtsybsJ6j10iv4A/viewform?usp=sharing"
                    }
                >
                    <Button onClick={() => {}} className="text-[18px]">
                        Contact Us Here!
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Page;
