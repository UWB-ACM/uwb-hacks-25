"use client";

import React from "react";
import Button from "@/src/components/Button";
import Link from "next/link";

function Sponsors() {
    return (
        <div className="flex flex-col w-full items-center px-6 md:px-12 py-12">
            <div className="max-w-[1200px] flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center w-full mb-12">
                    <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-6">
                        Why Sponsor Us?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center bg-white border-2 border-black p-6 shadow-md rounded-xl"
                            >
                                <span className="text-3xl">{benefit.icon}</span>
                                <h3 className="font-rubik-mono-one text-lg font-bold mt-2">
                                    {benefit.text}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
                    Sponsorship Opportunities
                </h1>

                {/* Sponsorship Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {sponsorshipOptions.map((option, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white border-2 border-black p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h2 className="font-rubik-mono-one text-xl font-bold">
                                {option.title}
                            </h2>
                            <p className="font-h3 text-base leading-6 my-4">
                                {option.description}
                            </p>
                            <Link href={option.link}>
                                <Button
                                    onClick={() => {}}
                                    className="text-lg px-6 py-2"
                                >
                                    Sponsor
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const benefits = [
    { icon: "🎯", text: "Access Top Talent" },
    { icon: "🚀", text: "Drive Innovation" },
    { icon: "🎓", text: "Impact the Community" },
];

const sponsorshipOptions = [
    {
        title: "Luncheon",
        description: "Support networking opportunities over a sponsored meal.",
        link: "/sponsor/luncheon",
    },
    {
        title: "Fun Activities",
        description:
            "Fund engaging activities to create memorable experiences.",
        link: "/sponsor/activities",
    },
    {
        title: "Prizes",
        description:
            "Support hackathon participants by sponsoring prizes.",
        link: "/sponsor/prizes",
    },
    {
        title: "Workshops",
        description:
            "Host workshops, sponsor challenge tracks, or provide mentorship.",
        link: "/sponsor/workshops",
    },
];

export default Sponsors;
