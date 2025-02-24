"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "./SideNav";

type HeaderProps = {
    refs: {
        [key: string]: React.RefObject<HTMLDivElement | null>;
    };
};

export default function Header({ refs }: HeaderProps) {
    const [sideNavState, setSideNavState] = useState(false);

    const Desktop = () => {
        return (
            <nav className="flex items-center justify-around lg:justify-between h-28 lg:px-20 w-full">
                <button
                    className="font-h1 text-5xl"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    {/* Using spans so the text stays inline when compressed */}
                    <span>UWB</span>
                    <span className="ml-3">Hacks</span>
                </button>

                <div className="hidden md:flex gap-x-10 ">
                    <button
                        className="font-h3 font-medium text-lg"
                        onClick={() => {

                            //scroll down to about section
                            refs["About"].current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        About
                    </button>

                    <button
                        className="font-h3 font-medium text-lg"
                        onClick={() => {
                            //scroll down to tracks section
                            refs["Tracks"].current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Tracks
                    </button>

                    <button
                        className="font-h3 font-medium text-lg"
                        onClick={() => {
                            //scroll down to schedule section
                            refs["Schedule"].current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Schedule
                    </button>

                    <button
                        className="font-h3 font-medium text-lg"
                        onClick={() => {
                            //scroll down to faq section
                            refs["FAQ"].current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        FAQ
                    </button>

                    <button
                        className="font-h3 font-medium text-lg"
                        onClick={() => {
                            router.push("/staff");
                        }}
                    >
                        Login
                    </button>
                    {/* <button
                        className="font-h3 font-medium m-0"
                        style={{fontSize: "5px"}}
                        onClick={() => {
                            router.push("/api/auth/google");
                        }}
                    >
                        Auth
                    </button> */}
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
