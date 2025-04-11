import PrizeCard from "@/src/components/dashboards/staff/PrizeCard";
import React from "react";
import { getPrizes } from "@/src/util/db/prize";
import { Metadata } from "next";
import Header from "@/src/components/header/Header";

export const metadata: Metadata = {
    title: "Hackeroon Shop | UWB Hacks 25",
};

export default async function PrizesPage() {
    // The catch is to let this work in builds without databases.
    const prizes = await getPrizes().catch((e) => {
        console.error(e);
        return [];
    });

    prizes.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        } else if (a.price > b.price) {  
            return 1;
        }
        return 0;
    });

    return (
        <div className="w-full min-h-full flex flex-col">
            <Header
                links={[
                    {
                        id: "sponsor",
                        name: "Sponsor Us",
                        url: "/sponsor",
                    },
                    {
                        id: "about",
                        name: "About",
                        url: "/#about",
                    },
                    {
                        id: "tracks",
                        name: "Tracks",
                        url: "/#tracks",
                    },
                    {
                        id: "schedule",
                        name: "Schedule",
                        url: "/#schedule",
                    },
                    {
                        id: "faq",
                        name: "FAQ",
                        url: "/#faq",
                    },
                    {
                        id: "dashboard",
                        name: "Dashboard",
                        url: "/dashboard",
                    },
                ]}
            />

            <h1 className="font-san-marino-beach text-5xl text-[#2886c4] text-center mt-8">
                Hackeroon Shop
            </h1>

            {/* TODO: Update actual prizes */}
            {/* TODO: Insert prize stand location below. */}
            <div className="flex justify-center">
                <p className="mt-4 font-h1 text-3xl text-[#39a8f1] text-center w-[90%] md:w-[80%]">
                    Check out what your hackeroons can buy!
                </p>
            </div>

            <p className="self-center text-center max-w-[80%] md:max-w-[50%] font-bold">
                Prizes are offered on a first-come-first-serve basis
            </p>

            <div className="w-full flex-grow p-8 overflow-scroll overflow-x-hidden grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prizes.map((prize, index) => (
                    <PrizeCard key={index} prize={prize} />
                ))}
            </div>
        </div>
    );
}
