import React, { useState } from "react";
import Image from "next/image";
import { Prize } from "@/src/util/dataTypes";

export interface CardProps {
    prize: Prize;
    hackeroonAmount: number;
    setHackeroonAmount: React.Dispatch<React.SetStateAction<number>>;
    setSelectedItems: React.Dispatch<React.SetStateAction<Prize[]>>;
}

export default function PrizeCard({
    prize,
    hackeroonAmount,
    setHackeroonAmount,
    setSelectedItems,
}: CardProps) {
    const [isItemBought, setIsItemBought] = useState(false);
    const [prizeStock, setPrizeStock] = useState(prize.stock);

    const buyItem = (itemPrice: number) => {
        if (
            !isItemBought &&
            hackeroonAmount - itemPrice >= 0 &&
            prizeStock > 0
        ) {
            // If we can buy it, and we haven't already, then do so.

            setHackeroonAmount((prev) => prev - itemPrice);
            setIsItemBought(true);
            // Remove from stock
            setPrizeStock((prev) => prev - 1);
            // Add item to selected items
            setSelectedItems((prev) => [...prev, prize]);
        } else if (isItemBought) {
            // If item is bought, unbuy item and refund hackeroons

            setHackeroonAmount((prev) => prev + itemPrice);
            setIsItemBought(false);
            // Restore Stock
            setPrizeStock((prev) => prev + 1);
            // Remove item from selected items
            setSelectedItems((prev) =>
                prev.filter((item) => item.id !== prize.id),
            );
        }
    };

    return (
        <div className="flex flex-col justify-center p-8 min-h-[200px] bg-neutral-200 rounded-lg border-2 border-neutral-400 shadow-md">
            {/* Image */}
            <div className="h-[100px] flex justify-center py-4 my-4 bg-neutral-100 rounded-md">
                <Image
                    src={"/globe.svg"}
                    height={200}
                    width={200}
                    alt={`Image of ${prize.name}`}
                    className="object-contain"
                />
            </div>
            {/* Name */}
            <h2 className="text-center text-2xl">{prize.name}</h2>
            {/* Stock and Price */}
            <div className="flex justify-around py-1">
                <p>{`${prizeStock} Left!`}</p>
                <p>{`${prize.price} Hackeroons`}</p>
            </div>
            {/* Description */}
            <h3 className="text-center">{prize.description}</h3>
            <button
                className={`py-4 mt-4 rounded-md text-white border-[1px] border-black ${isItemBought ? "bg-red-500" : "bg-green-500"}`}
                onClick={() => {
                    buyItem(prize.price);
                }}
            >
                {isItemBought ? "Remove" : "Buy"}
            </button>
        </div>
    );
}
