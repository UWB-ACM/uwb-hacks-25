"use client";

import Link from "next/link";
import React from "react";
import Button from "@/src/components/Button";

function Page() {
    return (
        <div className="flex flex-col w-full items-center px-6 md:px-12 py-12">
            <div className="max-w-[1000px] flex flex-col items-center text-center">
                <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
                    {"Sponsor The Demo Day Fair"}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            {"What is the Demo Day Fair?"}
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            On the final day of the hackathon, we’ll host a Demo
                            Day alongside judging to connect students with
                            industry professionals. As a sponsor, you will have
                            direct access to find new talent.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black px-8 py-4 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="font-rubik-mono font-bold text-2xl text-[#2886c4]">
                            {"Sponsor the Fair!"}
                        </h3>
                        <p className="font-h3 text-base leading-6 mt-4">
                            Sponsoring the fair offers a prime opportunity to
                            connect with innovative talent at the hackathon and
                            delve into their exciting projects—all it takes is
                            having a few company representatives on hand to
                            spark meaningful conversations.
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
