"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <div className="h-screen w-full grid place-content-center">
            <div className="h-[50vh] w-[50vw] rounded-xl border-2 border-black p-4">
                <h1 className="grid place-content-center h-[70%] text-center text-4xl">
                    Transaction Complete!
                </h1>
                <div className="h-[30%] text-2xl text-white grid place-content-center">
                    <button
                        className="bg-green-500 border-[1px] border-black rounded-xl p-4"
                        onClick={() => {
                            router.push("/staff");
                        }}
                    >
                        Return to Staff Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}
