"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Prize } from "@/src/util/dataTypes";
import DefaultImage from "@/public/bg.jpg";
import AdidasFleeceHoodie from "@/public/hackeroonShop/adidasFleeceHoodie.png";
import WirelessBankCharger from "@/public/hackeroonShop/powerBank.jpeg";
import LapDesk from "@/public/hackeroonShop/lapDesk.jpeg";
import Pickleball from "@/public/hackeroonShop/pickleballSet.png";
import DualLunchBag from "@/public/hackeroonShop/lunchBag.png";
import Backpack from "@/public/hackeroonShop/backpack.jpeg";

export interface CardProps {
    prize: Prize;
    hackeroonAmount?: number;
    setHackeroonAmount?: React.Dispatch<React.SetStateAction<number>>;
    selectedItems?: Prize[];
    setSelectedItems?: React.Dispatch<React.SetStateAction<Prize[]>>;
}

const retrievePrizeImage = (prizeName: string | null): StaticImageData => {
    switch (prizeName) {
        case "wirelessBankCharger":
            return WirelessBankCharger;
        case "lapDesk":
            return LapDesk;
        case "pickleball":
            return Pickleball;
        case "dualLunchBag":
            return DualLunchBag;
        case "adidasAvanadeHoodie":
            return AdidasFleeceHoodie;
        case "backpack":
            return Backpack;
        default:
            return DefaultImage;
    }
};

export default function PrizeCard({
    prize,
    hackeroonAmount,
    setHackeroonAmount,
    selectedItems,
    setSelectedItems,
}: CardProps) {
    const enablePurchasing =
        hackeroonAmount != null &&
        setHackeroonAmount != null &&
        setSelectedItems != null;

    const isItemBought =
        selectedItems?.some((selectedPrize) => selectedPrize.id === prize.id) ??
        false;
    const prizeStock = prize.initialStock - prize.sold - (isItemBought ? 1 : 0);

    const buyItem = (itemPrice: number) => {
        if (!enablePurchasing) return;

        if (
            !isItemBought &&
            hackeroonAmount - itemPrice >= 0 &&
            prizeStock > 0
        ) {
            setHackeroonAmount((prev) => prev - itemPrice);
            setSelectedItems((prev) => [...prev, prize]);
        } else if (isItemBought) {
            setHackeroonAmount((prev) => prev + itemPrice);
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
            <div className="relative w-full h-[200px] bg-white rounded-md border-2 border-black mb-4">
                <Image
                    className="object-contain"
                    src={retrievePrizeImage(prize.imageName)}
                    alt={`Image of ${prize.name}`}
                    fill
                />
            </div>

            {/* Stock and Price Row */}
            <div className="flex w-full mb-2 space-x-2">
                {/* Stock */}
                <div className="flex items-center justify-center bg-[#66B0F2] text-black font-comic rounded-md p-2 w-1/2 border-[2px] border-black">
                    <p className="text-sm">{`${prizeStock} Left!`}</p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center bg-[#F7CC58] text-black font-comic rounded-md p-2 w-1/2 border-[2px] border-black">
                    <p className="text-sm">{`${prize.price} Hackeroons`}</p>
                </div>
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
