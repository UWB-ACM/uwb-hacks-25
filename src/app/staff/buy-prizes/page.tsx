"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";
import Card from "../../ui/components/Card";
import prizes_data from "../mockprizes.json";
import user_data from "../../participant/mockuser.json";

type Prize = {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
};

export default function Page() {
    const router = useRouter();

    const prizes = prizes_data["prizes"];
    const { name, hackeroons } = user_data["user"];
    const [hackeroonAmount, setHackeroonAmount] = useState(hackeroons);

    const [selectedItems, setSelectedItems] = useState<Prize[]>([]);

    const handleSubmit = () => {
        if (selectedItems.length != 0) {
            router.push("/staff/buy-prizes/transaction-complete");
        }
    };

    return (
        <>
            {/*
                Header
                
                Contains:
                    - Title of Page ("Prizes")
                    - Person you're buying prizes for
                    - Person's current total hackeroon amount
            */}
            <div className="h-[15vh] flex flex-col justify-center bg-neutral-100 py-4 px-6 border-b-[1px] border-black">
                <h1 className="text-center text-3xl pb-4">Prizes</h1>
                <div className="flex justify-around text-center text-2xl">
                    <h2>
                        Buying for <span className="font-bold">{name}</span>
                    </h2>
                    <h2>
                        Hackeroons Remaining:{" "}
                        <span className="font-bold">{hackeroonAmount}</span>
                    </h2>
                </div>
            </div>

            {/*
                Buy Prize 
                
                Contains:
                    - Prize Cards
                    - Shopping Cart / Selected Items
            */}
            <div className="h-[85vh] flex">
                {/* Prize Cards */}
                <div className="h-[85vh] w-[85vw] p-12 overflow-scroll overflow-x-hidden grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prizes.map((prize, index) => (
                        <Card
                            key={index}
                            prize={prize}
                            hackeroonAmount={hackeroonAmount}
                            setHackeroonAmount={setHackeroonAmount}
                            setSelectedItems={setSelectedItems}
                        />
                    ))}
                </div>

                {/* Shopping Cart / Selected Items */}
                <div className="h-[85vh] w-[15vw] flex flex-col justify-between bg-neutral-100 border-l-[1px] border-black">
                    {/* Selected Items */}
                    <div className="p-4">
                        <h2 className="text-center text-2xl">Selected Items</h2>
                        <ul className="list-disc px-4 space-y-2">
                            {selectedItems.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Complete Button */}
                    <button
                        className="p-4 bg-green-500 hover:bg-green-600/90 duration-300 border-[1px] border-black text-white"
                        onClick={handleSubmit}
                    >
                        Complete
                    </button>
                </div>
            </div>
        </>
    );
}
