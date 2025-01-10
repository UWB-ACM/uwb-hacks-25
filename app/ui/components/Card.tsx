"use client";
import React, { useState } from "react";
import Image from "next/image";

type Prize = {
    name: string;
    description: string;
    stock: number;
    price: number;
};

type CardProps = {
    prize: Prize;
    hackeroonAmount: number;
    setHackeroonAmount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Card({
    prize,
    hackeroonAmount,
    setHackeroonAmount,
}: CardProps) {
    const buyItem = (itemPrice: number) => {
        if (hackeroonAmount - itemPrice >= 0) {
            setHackeroonAmount((prev) => prev - itemPrice);
            setItemBought(true);
        }
    };

    const [itemBought, setItemBought] = useState(false);

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
                <p>{`${prize.stock} Left!`}</p>
                <p>{`${prize.price} Hackeroons`}</p>
            </div>
            {/* Description */}
            <h3 className="text-center">{prize.description}</h3>
            <button
                className={`py-4 mt-4 rounded-md text-white ${itemBought ? "bg-green-900" : "bg-green-500"}`}
                onClick={() => {
                    buyItem(prize.price);
                }}
            >
                {itemBought ? "Bought" : "Buy"}
            </button>
        </div>
    );
}
