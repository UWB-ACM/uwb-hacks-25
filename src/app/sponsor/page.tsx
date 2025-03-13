"use client";

import React from "react";
import Button from "@/src/components/Button";
import Link from "next/link";

function Sponsors() {
    return (
        <div className="px-6 md:px-[10rem] py-6">
            {/* Why Sponsor Us? Header Section */}
            <section>
                <h1 className="font-san-marino-beach text-4xl md:text-5xl text-center text-[#2886c4] pb-2">
                    Why Sponsor Us?
                </h1>
                {/* Why Sponsor Us? Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="w-[70%] md:w-full flex flex-col gap-y-2 justify-between text-center bg-white border-2 border-black p-6 rounded-xl duration-300 hover:shadow-[inset_-3px_-3px_0px_0_rgba(0,0,0,0.9)] hover:-translate-x-1 hover:-translate-y-1">
                                <span className="text-3xl">{benefit.icon}</span>
                                <h3 className="text-lg lg:text-xl">
                                    {benefit.text}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sponsorship Opportunities Section */}
            <section>
                {/* Header */}
                <h1 className="font-san-marino-beach text-4xl md:text-5xl text-center text-[#2886c4] pb-2 mt-12">
                    Sponsorship Opportunities
                </h1>
                {/* Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {sponsorshipOptions.map((option, index) => (
                        <div key={index} className="flex justify-center w-full">
                            <div className="w-[75%] md:w-full flex flex-col items-center justify-between text-center bg-white border-2 border-black p-6 rounded-xl duration-300 hover:shadow-[inset_-3px_-3px_0px_0_rgba(0,0,0,0.9)] hover:-translate-x-1 hover:-translate-y-1">
                                <h2 className="text-2xl font-bold">
                                    {option.title}
                                </h2>
                                <p className="font-h3 text-base leading-6 mt-1">
                                    {option.description}
                                </p>
                                <Link href={option.link} className="mt-2">
                                    <Button
                                        onClick={() => {}}
                                        className="text-lg px-6 py-2"
                                    >
                                        Sponsor
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        // <div className="flex flex-col w-full items-center px-6 md:px-12 py-12">
        //     <div className="flex flex-col items-center">
        //         {/* Header Section */}
        //         <div className="text-center w-full mb-12">
        //             <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-6">
        //                 Why Sponsor Us?
        //             </h1>
        //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        //                 {benefits.map((benefit, index) => (
        //                     <div
        //                         key={index}
        //                         className="flex flex-col items-center text-center bg-white border-2 border-black p-6 shadow-md rounded-xl"
        //                     >
        //                         <span className="text-3xl">{benefit.icon}</span>
        //                         <h3 className="font-rubik-mono-one text-lg font-bold mt-2">
        //                             {benefit.text}
        //                         </h3>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>

        //         <h1 className="font-san-marino-beach text-5xl text-[#2886c4] pb-8">
        //             Sponsorship Opportunities
        //         </h1>

        //         {/* Sponsorship Options */}
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        //             {sponsorshipOptions.map((option, index) => (
        //                 <div
        //                     key={index}
        //                     className="flex flex-col items-center text-center bg-white border-2 border-black p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
        //                 >
        //                     <h2 className="font-rubik-mono-one text-xl font-bold">
        //                         {option.title}
        //                     </h2>
        //                     <p className="font-h3 text-base leading-6 my-4">
        //                         {option.description}
        //                     </p>
        //                     <Link href={option.link}>
        //                         <Button
        //                             onClick={() => {}}
        //                             className="text-lg px-6 py-2"
        //                         >
        //                             Sponsor
        //                         </Button>
        //                     </Link>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
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
        title: "Tracks",
        description:
            "Support hackathon participants by sponsoring challenge tracks.",
        link: "/sponsor/tracks",
    },
    {
        title: "Workshops",
        description:
            "Host workshops, sponsor challenge tracks, or provide mentorship.",
        link: "/sponsor/workshops",
    },
];

export default Sponsors;
