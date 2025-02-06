"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    // sort users in descending order by their hackeroon count
    return (
        <nav className="h-28 px-20 w-full flex justify-between place-content-center">
            <button
                className="font-h1 text-5xl"
                onClick={() => {
                    router.push("/");
                }}
            >
                UWB Hacks
            </button>

            <div className="flex gap-x-10">
                <button
                    className="font-h3 font-medium text-lg"
                    onClick={() => {
                        router.push("/");
                        //scroll down to about section
                    }}
                >
                    About
                </button>

                <button
                    className="font-h3 font-medium text-lg"
                    onClick={() => {
                        router.push("/");
                        //scroll down to tracks section
                    }}
                >
                    Tracks
                </button>

                <button
                    className="font-h3 font-medium text-lg"
                    onClick={() => {
                        router.push("/");
                        //scroll down to schedule section
                    }}
                >
                    Schedule
                </button>

                <button
                    className="font-h3 font-medium text-lg"
                    onClick={() => {
                        router.push("/");
                        //scroll down to faq section
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
                    Staff
                </button>
                <button
                    className="font-h3 font-medium text-lg"
                    onClick={() => {
                        router.push("/api/auth/google");
                    }}
                >
                    TEMP Section (Auth)
                </button>
            </div>
        </nav>
    );
}
