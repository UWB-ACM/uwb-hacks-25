"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Prize } from "@/src/util/dataTypes";

export interface CardProps {
    prize: Prize;
    hackeroonAmount?: number;
    setHackeroonAmount?: React.Dispatch<React.SetStateAction<number>>;
    setSelectedItems?: React.Dispatch<React.SetStateAction<Prize[]>>;
}

export default function PrizeCard({
    prize,
    hackeroonAmount,
    setHackeroonAmount,
    setSelectedItems,
}: CardProps) {
    const enablePurchasing =
        hackeroonAmount != null &&
        setHackeroonAmount != null &&
        setSelectedItems != null;

    const [isItemBought, setIsItemBought] = useState(false);
    const [prizeStock, setPrizeStock] = useState(prize.stock);

    const buyItem = (itemPrice: number) => {
        if (!enablePurchasing) return;

        if (
            !isItemBought &&
            hackeroonAmount - itemPrice >= 0 &&
            prizeStock > 0
        ) {
            setHackeroonAmount((prev) => prev - itemPrice);
            setIsItemBought(true);
            setPrizeStock((prev) => prev - 1);
            setSelectedItems((prev) => [...prev, prize]);
        } else if (isItemBought) {
            setHackeroonAmount((prev) => prev + itemPrice);
            setIsItemBought(false);
            setPrizeStock((prev) => prev + 1);
            setSelectedItems((prev) =>
                prev.filter((item) => item.id !== prize.id),
            );
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-neutral-200 rounded-lg border-[4px] border-black shadow-comic">
            {/* Product Name */}
            <h2 className="text-center text-2xl font-comic text-black mb-4">
                {prize.name}
            </h2>

            {/* Image Section */}
            <div className="w-full h-[200px] flex justify-center items-center bg-neutral-100 rounded-md border-[2px] border-black mb-4">
                <Image
                    src={"/globe.svg"}
                    height={200}
                    width={200}
                    alt={`Image of ${prize.name}`}
                    className="object-contain"
                />
            </div>

            {/* Stock and Price Row */}
            <div className="flex w-full mb-2 space-x-2">
                {/* Stock */}
                <div className="flex items-center justify-center bg-green-300 text-black font-comic rounded-md p-2 w-1/2 border-[2px] border-black">
                    <p className="text-sm">{`${prizeStock} Left!`}</p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center bg-blue-300 text-black font-comic rounded-md p-2 w-1/2 border-[2px] border-black">
                    <p className="text-sm">{`${prize.price} Hackeroons`}</p>
                </div>
            </div>

            {/* Description Row */}
            <div className="w-full mb-4 bg-yellow-300 text-black font-comic rounded-md p-2 border-[2px] border-black">
                <p className="text-sm text-center">{prize.description}</p>
            </div>

            {/* Buy/Remove Button */}
            {enablePurchasing && (
                <button
                    className={`py-2 px-6 rounded-md text-white font-comic border-[2px] border-black ${
                        isItemBought
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => {
                        buyItem(prize.price);
                    }}
                >
                    {isItemBought ? "Remove" : "Buy"}
                </button>
            )}
        </div>
    );
}
