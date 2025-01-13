"use client";

import { useRouter } from "next/navigation";

import React, { useState, useEffect, useRef } from "react";
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

    const headerRef = useRef<HTMLDivElement>(null!);
    const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0);
    const [selectedItems, setSelectedItems] = useState<Prize[]>([]);
    useEffect(() => {
        if (headerRef != null) {
            setHeaderOffsetHeight(headerRef.current.offsetHeight);
            console.log("header offset height,", headerOffsetHeight);
        }
    }, [headerOffsetHeight]);

    const handleSubmit = () => {
        if (selectedItems.length != 0) {
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
                        Buying for <span className="font-bold">{name}</span>
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
                        <Card
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
