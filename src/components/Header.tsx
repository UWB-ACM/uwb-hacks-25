"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    // sort users in descending order by their hackeroon count
    return (
        <nav className="bg-slate-300 p-10 w-full flex justify-around place-content-center">
            
            <button
                className=""
                onClick={() => {
                    router.push("/");
                }}
            >
                UWB Hacks
            </button>
            
            <button
                className=""
                onClick={() => {
                    router.push("/");
                    //scroll down to about section
                }}
            >
                About
            </button>

            <button
                className=""
                onClick={() => {
                    router.push("/");
                    //scroll down to tracks section
                }}
            >
                Tracks
            </button>

            <button
                className=""
                onClick={() => {
                    router.push("/");
                    //scroll down to schedule section
                }}
            >
                Schedule
            </button>
            
            <button
                className=""
                onClick={() => {
                    router.push("/");
                    //scroll down to faq section
                }}
            >
                FAQ
            </button>

            <button
                className=""
                onClick={() => {
                    router.push("/staff");
                }}
            >
                Staff
            </button>
            <button
                className=""
                onClick={() => {
                    router.push("/api/auth/google");
                }}
            >
                TEMP Section (Auth)
            </button>
        </nav>
    );
}
