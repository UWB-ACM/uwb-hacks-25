"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import user_data from "@/src/app/participant/mockuser.json";

export default function Page() {
    const router = useRouter();

    const { name } = user_data["user"];

    const [amount, setAmount] = useState(0);
    const [reason, setReason] = useState("event");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Amount:", amount, "\nReason:", reason);
        router.push("/staff");
    };

    return (
        <div className="h-screen grid place-content-center">
            {/* Container for "Transfer Hackeroons" Content */}
            <div className="h-[80vh] w-[80vw] max-w-[70vh] rounded-xl p-5 border-[1px] border-black shadow-xl">
                <form
                    onSubmit={handleSubmit}
                    className="h-[70vh] grid place-content-center"
                >
                    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
                        Transferring Hackeroons to{" "}
                        <span className="font-bold whitespace-nowrap">
                            {name}
                        </span>
                    </h1>
                    <div className="grid place-content-center">
                        <div className="flex flex-col w-[60vw] max-w-[50vh] mt-4 md:text-lg lg:text-xl">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                step={10}
                                id="amount"
                                value={amount}
                                className="px-4 py-3 border-[1px] border-black rounded-md"
                                placeholder="1000"
                                onChange={(e) =>
                                    setAmount(Number(e.target.value))
                                }
                            />
                        </div>
                        <div className="flex flex-col w-[60vw] max-w-[50vh] mt-4 md:text-lg lg:text-xl">
                            <label htmlFor="reason">Reason</label>
                            <select
                                id="reason"
                                value={reason}
                                className="px-4 py-3 border-[1px] border-black rounded-md"
                                onChange={(e) => setReason(e.target.value)}
                            >
                                <option value="event">Event Attendance</option>
                                <option value="prize">Prize Purchase</option>
                                <option value="unkown">Unknown</option>
                            </select>
                        </div>
                        <input
                            className="mt-4 py-3 bg-green-500 hover:bg-green-600 duration-200 rounded-md border-[1px] border-black text-white cursor-pointer"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
