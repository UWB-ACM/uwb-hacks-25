"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "./SideNav";
import "../../styles/header.css";
import Link from "next/link";

export default function Header() {
    const [sideNavState, setSideNavState] = useState(false);

    const Desktop = () => {
        return (
            <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full">
                <Link href="/">
                    <button className="font-h1 text-5xl  scale-up-animation">
                        {/* Using spans so the text stays inline when compressed */}
                        <span>UWB</span>
                        <span className="ml-3">Hacks</span>
                    </button>
                </Link>

                <div className="hidden md:flex gap-x-10 ">
                    <Link href="/sponsor">
                        <button className="font-h3 font-medium text-lg scale-up-animation">
                            Why Work With Us
                        </button>
                    </Link>

                    <Link href="/sponsor/prizes">
                        <button className="font-h3 font-medium text-lg scale-up-animation">
                            Prizes
                        </button>
                    </Link>

                    <Link href="/sponsor/judging">
                        <button className="font-h3 font-medium text-lg scale-up-animation">
                            Judging
                        </button>
                    </Link>

                    <Link href="/sponsor/hackeroons">
                        <button className="font-h3 font-medium text-lg scale-up-animation">
                            Hackeroons
                        </button>
                    </Link>

                    <Link href="/sponsor/workshops">
                        <button className="font-h3 font-medium text-lg scale-up-animation">
                            Workshops
                        </button>
                    </Link>

                    <Link href="/sponsor/other">
                        <button className="font-h3 font-medium text-lg scale-up-animation">
                            Other
                        </button>
                    </Link>
                </div>
            </nav>
        );
    };

    const Mobile = () => {
        return (
            <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full min-w-72">
                <button
                    className="font-h1 text-3xl"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    {/* Using spans so the text stays inline when compressed */}
                    <span>UWB</span>
                    <span className="ml-3">Hacks</span>
                </button>

                <button
                    className="bg-gray-200 w-12 h-12 flex justify-center items-center"
                    onClick={() => {
                        setSideNavState(true);
                    }}
                >
                    X
                </button>
            </nav>
        );
    };

    const router = useRouter();
    // sort users in descending order by their hackeroon count
    return (
        <>
            <div className="hidden md:block">
                <Desktop />
            </div>
            <div className="block md:hidden">
                <Mobile />
            </div>
            {sideNavState && <SideNav setSideNavState={setSideNavState} />}
        </>
    );
}
