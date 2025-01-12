"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <div className="h-screen w-full grid place-content-center">
            <h1 className="text-4xl text-center">Staff Dashboard</h1>
            {/* Container for Buttons */}
            <div className="w-[95vw] flex gap-x-4 justify-between mt-4">
                <button
                    className="h-[70vh] w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center hover:bg-neutral-200 duration-300"
                    onClick={() => {
                        router.push("staff/buy-prizes");
                    }}
                >
                    <p>Buy Prizes</p>
                </button>
                <button
                    className="h-[70vh] w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center hover:bg-neutral-200 duration-300"
                    onClick={() => {
                        router.push("staff/transfer-hackeroons");
                    }}
                >
                    Transfer Hackeroons
                </button>
                <button
                    className="h-[70vh] w-[30vw] bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 grid place-content-center hover:bg-neutral-200 duration-300"
                    onClick={() => {
                        router.push("staff/modify-user");
                    }}
                >
                    Modify User Account
                </button>
            </div>
        </div>
    );
}
