"use client";

import React, { useState } from "react";
import { actionCreateTransaction } from "@/src/util/actions/transactions";
import {
    TransactionType,
    User,
    valuedTransactionTypes,
} from "@/src/util/dataTypes";
import Link from "next/link";
import DashboardFeedback from "@/src/components/dashboards/DashboardFeedback";

export default function TransferHackaroonsPage({ user }: { user: User }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedbackSuccess, setFeedbackSuccess] = useState<
        "success" | "error" | "over-limit"
    >("error");

    const feedbackTitle = {
        success: "Success",
        error: "Failure",
        "over-limit": "Failure",
    } as const;

    const feedbackDescription = {
        success: "Successfully credited Hackeroons.",
        error: "An error occurred. Please try again, and ensure that this transaction doesn't make the user's balance go below zero.",
        "over-limit":
            "This user has already received the maximum amount they can for this transaction category.",
    } as const;

    const reasonTypeMap = {
        unknown: TransactionType.Unknown,
        performance: TransactionType.Performance,
        "activity-winner": TransactionType.ActivityWinner,
        "costume-fandom": TransactionType.CostumeFandom,
        "costume-husky": TransactionType.CostumeHusky,
        "costume-professional": TransactionType.CostumeProfessional,
    } as const;

    const reasonNameMap: Record<keyof typeof reasonTypeMap, string> = {
        unknown: "Unknown",
        performance: "Performance",
        "activity-winner": "Activity Winner",
        "costume-fandom": "Fandom Costume (Friday)",
        "costume-husky": "Husky Spirit Costume (Saturday)",
        "costume-professional": "Professional Costume (Sunday)",
    };

    const [amount, setAmount] = useState<number>(0);
    const [reason, setReason] = useState<keyof typeof reasonTypeMap>("unknown");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // If this transaction type has a prescribed amount,
        // use that instead of the saved one.
        const reasonType = reasonTypeMap[reason];
        const trueAmount =
            reasonType in valuedTransactionTypes
                ? valuedTransactionTypes[
                      reasonType as keyof typeof valuedTransactionTypes
                  ]
                : amount;

        const data = await actionCreateTransaction(
            user.id,
            reasonTypeMap[reason],
            trueAmount,
            null,
            null,
        );

        setIsModalOpen(true);

        if (data != null && "error" in data) {
            setFeedbackSuccess(data["error"]);
        } else if (data != null) {
            setFeedbackSuccess("success");
        } else {
            setFeedbackSuccess("error");
        }
    };

    return (
        <>
            <div className="h-screen grid place-content-center">
                {/* Container for "Transfer Hackeroons" Content */}
                <div className="h-[80vh] w-[80vw] max-w-[70vh] rounded-xl p-5 border-[1px] border-black shadow-xl grid place-content-center">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
                            Transferring Hackeroons to{" "}
                            <span className="font-bold whitespace-nowrap">
                                {user.name}
                            </span>
                        </h1>
                        <div className="grid place-content-center">
                            {/* Only show amount for transaction types with no prescribed value. */}
                            {!(
                                reasonTypeMap[reason] in valuedTransactionTypes
                            ) && (
                                <>
                                    <div className="flex flex-col w-[60vw] max-w-[50vh] mt-4 md:text-lg lg:text-xl">
                                        <label htmlFor="amount">Amount</label>
                                        <input
                                            required
                                            id="amount"
                                            type="number"
                                            min={0}
                                            step={5}
                                            value={amount.toString()}
                                            className="px-4 py-3 border-[1px] border-black rounded-md"
                                            onChange={(e) =>
                                                setAmount(
                                                    Number(e.target.value),
                                                )
                                            }
                                        />
                                        {error && (
                                            <p className="text-red-500 font-bold text-center text-base mt-1">
                                                {error}
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}
                            <div className="flex flex-col w-[60vw] max-w-[50vh] mt-4 md:text-lg lg:text-xl">
                                <label htmlFor="reason">Reason</label>
                                <select
                                    id="reason"
                                    value={reason}
                                    className="px-4 py-3 border-[1px] border-black rounded-md"
                                    onChange={(e) =>
                                        setReason(
                                            e.target
                                                .value as keyof typeof reasonTypeMap,
                                        )
                                    }
                                >
                                    {Object.keys(reasonTypeMap).map((key) => (
                                        <option key={key} value={key}>
                                            {
                                                reasonNameMap[
                                                    key as keyof typeof reasonTypeMap
                                                ]
                                            }
                                        </option>
                                    ))}
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
                title={feedbackTitle[feedbackSuccess]}
                description={feedbackDescription[feedbackSuccess]}
            />
        </>
    );
}
