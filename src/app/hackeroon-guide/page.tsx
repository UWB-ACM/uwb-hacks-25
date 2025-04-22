import React from "react";
import { Metadata } from "next";
import Header from "@/src/components/header/Header";
import MarketPlaceLink from "@/src/components/dashboards/userdashboard/MarketPlaceLink";

export const metadata: Metadata = {
    title: "Hackeroon Guide | UWB Hacks 25",
};

const PointItem = ({
    title,
    points,
    details,
}: {
    title: string;
    points: number;
    details: string;
}) => (
    <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
                <p className="text-md font-semibold text-black">{title}</p>
                <p className="text-sm text-gray-700">{details}</p>
            </div>
            <div className="inline-flex items-center text-lg font-semibold text-green-600">
                +{points}
            </div>
        </div>
    </li>
);

export default async function GuidePage() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header
                links={[
                    {
                        id: "hackeroon-guide",
                        name: "Hackeroon Guide",
                        url: "/hackeroon-guide",
                    },
                    { id: "about", name: "About", url: "/#about" },
                    { id: "tracks", name: "Tracks", url: "/#tracks" },
                    { id: "schedule", name: "Schedule", url: "/#schedule" },
                    { id: "faq", name: "FAQ", url: "/#faq" },
                    { id: "dashboard", name: "Dashboard", url: "/dashboard" },
                ]}
            />

            <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-8 md:px-6 md:py-12">
                <h1 className="font-san-marino-beach text-5xl md:text-6xl text-[#2886c4] text-center mb-4">
                    Hackeroon Guide
                </h1>

                <p className="mt-2 font-h1 text-2xl md:text-3xl text-[#39a8f1] text-center mb-12 max-w-3xl mx-auto">
                    Ready to earn some Hackeroons? Here{"'"}s your mission
                    brief!
                </p>

                {/* Section for Month of Hacking */}
                <section className="mb-12">
                    <h2 className="text-3xl font-comic text-black mb-6 text-center md:text-left">
                        Month of Hacking
                    </h2>

                    {/* All Days Card */}
                    <div className="bg-neutral-200 rounded-lg border-[4px] border-black shadow-comic overflow-hidden mb-8">
                        <div className="bg-orange-400 px-6 py-3">
                            <h3 className="text-xl font-comic text-white">
                                All Month Long (including the Hackathon)
                            </h3>
                        </div>

                        <ul className="divide-y divide-black px-6 pt-4 pb-6">
                            <PointItem
                                title="Event Attendance"
                                points={100}
                                details="Attend official events (Limit: 1 per event)."
                            />
                            <PointItem
                                title="Good Performance"
                                points={25}
                                details="Be helpful, ask great questions during official events (No limit!)."
                            />
                            <PointItem
                                title="Activity Winners"
                                points={100}
                                details="Win specific event activities: GrayHats CTF, GDG Trivia, A4S Trivia (Limit: 1 per win)."
                            />
                        </ul>
                    </div>
                </section>

                {/* Section for During the Hackathon */}
                <section className="mb-12">
                    <h2 className="text-3xl font-comic text-black mb-6 text-center md:text-left">
                        During the Hackathon
                    </h2>

                    {/* Friday Card */}
                    <div className="bg-neutral-200 rounded-lg border-[4px] border-black shadow-comic overflow-hidden mb-8">
                        <div className="bg-orange-400 px-6 py-3">
                            <h3 className="text-xl font-comic text-white">
                                Friday
                            </h3>
                        </div>
                        <ul className="divide-y divide-black px-6 pt-4 pb-6">
                            <PointItem
                                title="Super Hero Wear"
                                points={50}
                                details="Rock your super hero gear! (Redeem once, all day)."
                            />
                            {/* <PointItem
                                title="Fireside Chat (ARC)"
                                points={100}
                                details="Attend a fireside chat with Cameron Bielstein (Redeem once). 📍 ARC | ⏰ 4:00 PM"
                            />*/}
                        </ul>
                    </div>

                    {/* Saturday Card */}
                    <div className="bg-neutral-200 rounded-lg border-[4px] border-black shadow-comic overflow-hidden mb-8">
                        <div className="bg-orange-400 px-6 py-3">
                            <h3 className="text-xl font-comic text-white">
                                Saturday
                            </h3>
                        </div>
                        <ul className="divide-y divide-black px-6 pt-4 pb-6">
                            <PointItem
                                title="Husky Spirit Wear"
                                points={50}
                                details="Show your Husky pride! (Redeem once, all day)."
                            />
                            <PointItem
                                title="Fireside Chat (NCEC)"
                                points={100}
                                details="Attend the fireside chat with Heba Ramzy (Redeem once). 📍 NCEC | ⏰ 12:00 PM - 12:30 PM"
                            />
                            <PointItem
                                title="Entrepreneur in the Corner"
                                points={100}
                                details="Chat with Dan Terry (Redeem once). 📍 ARC | ⏰ 12:00 PM - 6:00 PM"
                            />
                            <PointItem
                                title="Photo with Dubs"
                                points={50}
                                details="Snap a pic with Dubs! (Redeem once). 📍 ARC | ⏰ 2:00 PM - 4:00 PM"
                            />
                            <PointItem
                                title="Photo with Holly"
                                points={50}
                                details="Say cheese with Holly! (Redeem once). 📍 ARC | ⏰ 3:00 PM - 3:30 PM"
                            />
                            <PointItem
                                title="Talk with Kody"
                                points={50}
                                details="Have a chat with Kody the Chatbot (Redeem once). 📍 ARC | ⏰ 1:00 PM - 3:00 PM"
                            />
                            <PointItem
                                title="Drop-in Badminton"
                                points={100}
                                details="Play some Badminton! (Redeem once). 📍 ARC Field | ⏰ 4:00 PM - 6:00 PM"
                            />
                        </ul>
                    </div>

                    {/* Sunday Card */}
                    <div className="bg-neutral-200 rounded-lg border-[4px] border-black shadow-comic overflow-hidden mb-8">
                        <div className="bg-orange-400 px-6 py-3">
                            <h3 className="text-xl font-comic text-white">
                                Sunday
                            </h3>
                        </div>
                        <ul className="divide-y divide-black px-6 pt-4 pb-6">
                            <PointItem
                                title="Professional Attire"
                                points={50}
                                details="Look sharp for Demo Day! (Redeem once, all day)."
                            />
                            <PointItem
                                title="Demo Day Attendance"
                                points={100}
                                details="Be there for the final demos! (Redeem once). ⏰ Starts 4:00 PM"
                            />
                            {/* <PointItem
                                title="Admissions Posting Booth"
                                points={50}
                                details="Visit the booth! (Redeem once, Location/Time TBC)."
                            />*/}
                        </ul>
                    </div>
                </section>

                {/* Prize Earning Info */}
                <section className="mt-16">
                    <h2 className="text-3xl font-comic text-black mb-6 text-center md:text-left">
                        Receiving Your Hackeroons
                    </h2>
                    <div className="bg-neutral-200 rounded-lg border-[4px] border-black shadow-comic p-6 text-center">
                        <p className="text-black mb-4">
                            There are a few different ways you can receive
                            Hackeroons. If in doubt, you can always ask a staff
                            member for help!
                        </p>
                        <p className="text-black mb-4">
                            To earn Hackeroons for attending an event, open your{" "}
                            <a
                                className="text-[darkcyan]"
                                href="/dashboard"
                                target="_blank"
                            >
                                Dashboard (click here)
                            </a>{" "}
                            and type the code into the check-in box.
                        </p>
                        <p className="text-black mb-4">
                            Otherwise, ask a staff member to receive your
                            reward. You{"'"}ll need to show them your QR code,
                            which can be found on your{" "}
                            <a
                                className="text-[darkcyan]"
                                href="/dashboard"
                                target="_blank"
                            >
                                Dashboard (click here)
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* Prize Redemption Info */}
                <section className="mt-16">
                    <h2 className="text-3xl font-comic text-black mb-6 text-center md:text-left">
                        Redeeming Your Hackeroons
                    </h2>
                    <div className="bg-neutral-200 rounded-lg border-[4px] border-black shadow-comic p-6 text-center">
                        <p className="text-black mb-4">
                            Come in-person on{" "}
                            <span className="font-semibold">
                                Sunday, April 27th, from 9:00 AM to 2:00 PM
                            </span>
                            , to exchange your hard-earned Hackeroons for
                            awesome prizes!
                        </p>
                        <p className="text-black mb-4">
                            Hackeroon Booths will be located on the{" "}
                            <span className="font-semibold">
                                top-floor of the ARC
                            </span>
                            .
                        </p>
                        <p className="text-black mb-4">
                            For more information, check out the Hackeroon Shop.
                        </p>
                        <MarketPlaceLink />
                        <p className="text-sm text-gray-700 mt-4">
                            <span className="font-semibold">Note:</span> Prizes
                            are offered on a first-come, first-serve basis.
                            Prices may also be subject to change.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
