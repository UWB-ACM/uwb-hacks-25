"use client";

import React, { useState } from "react";
import SideNav from "./SideNav";
import "../../styles/header.css";
import Link from "next/link";

export default function Header() {
    const [sideNavState, setSideNavState] = useState(false);

    const Desktop = () => {
        return (
            <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full">
                <Link href="/">
                    <button className="font-h1 text-5xl scale-up-animation">
                        {/* Using spans so the text stays inline when compressed */}
                        <span>UWB</span>
                        <span className="ml-3">Hacks</span>
                    </button>
                </Link>
                <Link href="/staff/buy-prizes">
                    <button className="font-h3 font-medium text-lg scale-up-animation">
                        Buy Prizes
                    </button>
                </Link>
                <Link href="/staff/modify-user">
                    <button className="font-h3 font-medium text-lg scale-up-animation">
                        Modify User
                    </button>
                </Link>
                <Link href="/staff/transfer-hackeroons">
                    <button className="font-h3 font-medium text-lg scale-up-animation">
                        Transfer Hackeroons
                    </button>
                </Link>
                <Link href="/staff">
                    <button className="font-h3 font-medium text-lg scale-up-animation">
                        Dashboard
                    </button>
                </Link>
            </nav>
        );
    };

    const Mobile = () => {
        return (
            <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full min-w-72">
                <Link href="/">
                    <button className="font-h1 text-3xl">
                        {/* Using spans so the text stays inline when compressed */}
                        <span>UWB</span>
                        <span className="ml-3">Hacks</span>
                    </button>
                </Link>

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
