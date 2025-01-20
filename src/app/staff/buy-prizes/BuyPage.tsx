"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import PrizeCard from "@/src/app/ui/components/PrizeCard";
import { Prize, TransactionType } from "@/src/util/dataTypes";
import { SessionUser } from "@/src/util/session";
import { actionCreateTransaction } from "@/src/util/actions/transactions";

export default function BuyPage({
    user,
    balance,
    prizes,
}: {
    user: SessionUser;
    balance: number;
    prizes: Prize[];
}) {
    const router = useRouter();

    const [hackeroonAmount, setHackeroonAmount] = useState(balance);

    const headerRef = useRef<HTMLDivElement>(null!);
    const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0);
    const [selectedItems, setSelectedItems] = useState<Prize[]>([]);
    useEffect(() => {
        if (headerRef != null) {
            setHeaderOffsetHeight(headerRef.current.offsetHeight);
            console.log("header offset height,", headerOffsetHeight);
        }
    }, [headerOffsetHeight]);

    const handleSubmit = async () => {
        if (selectedItems.length !== 0) {
            for (const item of selectedItems) {
                const data = await actionCreateTransaction(
                    user.id,
                    TransactionType.PrizePurchase,
                    // We need to subtract the item's price from the user's balance, not
                    // add it.
                    //
                    // This also allows the staff to arbitrarily chose the price,
                    // but since they can create arbitrary transactions anyway,
                    // that doesn't matter.
                    // This can only be ran by staff though, so users can't
                    // decide their own prices.
                    -item.price,
                    null,
                    item.id,
                );

                // TODO: Track which purchases failed.
                console.log(data);
            }

            router.push("/staff/buy-prizes/transaction-complete");
        }
    };

    return (
        <>
            {/* Prize Catalog */}
            <div ref={headerRef} className="sticky top-0 bg-white">
                <h1 className="text-center text-3xl pt-4">Prizes</h1>
                <div className="flex justify-around">
                    <h2 className="text-center text-2xl">
                        Buying for{" "}
                        <span className="font-bold">{user.name}</span>
                    </h2>
                    <h2 className="text-center text-2xl pb-4">
                        Hackeroons Remaining:{" "}
                        <span className="font-bold">{hackeroonAmount}</span>
                    </h2>
                </div>
            </div>
            {/* Prize Cards and Selected Items Container */}
            <div className="flex">
                {/* Prize Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 px-8 pb-4 mt-4 mr-[20vw] gap-6">
                    {prizes.map((prize, index) => (
                        <PrizeCard
                            key={index}
                            prize={prize}
                            hackeroonAmount={hackeroonAmount}
                            setHackeroonAmount={setHackeroonAmount}
                            setSelectedItems={setSelectedItems}
                        />
                    ))}
                </div>
                {/* Selected Items / Shopping Cart */}
                <div className="relative">
                    <div
                        className={`fixed bottom-0 right-0 w-[20vw] flex flex-col justify-between p-4 bg-neutral-200`}
                        style={{
                            top: `${headerOffsetHeight}px`,
                        }}
                    >
                        <div>
                            <h3 className="text-2xl text-center">
                                Selected Items
                            </h3>
                            <ul className="list-disc mt-1 px-2">
                                {selectedItems.map((item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                        <button
                            className="w-full h-[6%] bg-green-500 hover:bg-green-600/90 duration-300 border-[1px] border-black rounded-md text-white"
                            onClick={handleSubmit}
                        >
                            Complete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
