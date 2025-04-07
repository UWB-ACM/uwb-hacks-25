"use client";

import React, { useState } from "react";
import { actionCreateTransaction } from "@/src/util/actions/transactions";
import { TransactionType, User } from "@/src/util/dataTypes";
import Link from "next/link";
import DashboardFeedback from "@/src/components/dashboards/DashboardFeedback";

export default function TransferHackaroonsPage({ user }: { user: User }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedbackSuccess, setFeedbackSuccess] = useState(false);

    const [amount, setAmount] = useState(0);
    const [reason, setReason] = useState("unknown");

    const reasonMap: Record<string, TransactionType> = {
        unknown: TransactionType.Unknown,
        event: TransactionType.EventAttendance,
        prize: TransactionType.PrizePurchase,
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await actionCreateTransaction(
            user.id,
            reasonMap[reason],
            amount,
            null,
            null,
        );

        setIsModalOpen(true);
        setFeedbackSuccess(data != null);
    };

    return (
        <>
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
                                {user.name}
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
                                    {/* TODO: Add event and prize with their own dropdowns for event/prize ID */}
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                            <input
                                className="mt-4 py-3 bg-green-500 hover:bg-green-600 duration-200 rounded-md border-[1px] border-black text-white cursor-pointer"
                                type="submit"
                            />

                            {/* exit button that returns user back to staff dashboard */}
                            <Link
                                className="mt-4 py-3 bg-red-500 hover:bg-red-600 duration-200 rounded-md border-[1px] border-black text-white text-center cursor-pointer"
                                href={`/dashboard/${user.id}`}
                            >
                                Exit
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            <DashboardFeedback
                open={isModalOpen}
                setOpen={setIsModalOpen}
                title={feedbackSuccess ? "Success" : "Failure"}
                description={
                    feedbackSuccess
                        ? "Successfully credited Hackeroons."
                        : "An error occurred. Please try again, and ensure that this transaction doesn't make the user's balance go below zero."
                }
            />
        </>
    );
}
