"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { actionCreatePrize } from "@/src/util/actions/prize";

export default function page() {
    const router = useRouter();

    const [error, setError] = useState("");

    // Prize information
    const [prizeName, setPrizeName] = useState<string>("");
    const [prizeDescription, setPrizeDescription] = useState<string>("");
    const [prizeInitialStock, setPrizeInitialStock] = useState<number>(0);
    const [prizePrice, setPrizePrice] = useState<number>(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Error handling:
        /* 
        1. Prizes should not have a negative stock
        2. Prizes should not have a negative price
        */

        if (prizeInitialStock < 0 || Number.isNaN(prizeInitialStock)) {
            setError("Prizes must have an initial stock!");
            return;
        } else {
            setError("");
        }

        if (prizePrice < 0 || Number.isNaN(prizePrice)) {
            setError("Prizes must have a price above 0 hackaroons!");
            return;
        } else {
            setError("");
        }

        // useless unless we add a confirmation page that the prize has been added (good idea!!)
        const data = await actionCreatePrize(
            prizeName,
            prizeDescription,
            prizeInitialStock,
            prizePrice,
        );

        router.push("/dashboard");
    };

    return (
        <div className="w-full grid place-content-center">
            <form
                onSubmit={handleSubmit}
                className="p-4 border-black border rounded-lg bg-white"
            >
                <h2 className="text-xl md:text-2xl text-center font-semibold">
                    Create Prize
                </h2>
                <div className="grid md:grid-cols-2 md:gap-y-4 mt-4">
                    {/* Prize Name */}
                    <label htmlFor="prizeName" className="flex items-center">
                        Prize Name
                    </label>
                    <input
                        id="prizeName"
                        value={prizeName}
                        onChange={(e) => setPrizeName(e.target.value)}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Prize Description */}
                    <label
                        htmlFor="prizeDescription"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Prize Description
                    </label>
                    <input
                        id="prizeDescription"
                        value={prizeDescription}
                        onChange={(e) => setPrizeDescription(e.target.value)}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Prize Initial Stock */}
                    <label
                        htmlFor="prizeInitialStock"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Prize Initial Stock
                    </label>
                    <input
                        id="prizeInitialStock"
                        value={prizeInitialStock || 0}
                        type="number"
                        step={10}
                        min={0}
                        onChange={(e) => {
                            setPrizeInitialStock(parseInt(e.target.value));
                        }}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Prize Price */}
                    <label
                        htmlFor="prizePrice"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Prize Price
                    </label>
                    <input
                        id="prizePrice"
                        value={prizePrice || 0}
                        type="number"
                        step={10}
                        min={0}
                        onChange={(e) => {
                            setPrizePrice(parseInt(e.target.value));
                        }}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />
                </div>
                {error && (
                    <p className="mt-4 text-red-600 text-center">{error}</p>
                )}
                <button
                    type="submit"
                    className="mt-4 py-2 px-4 rounded-md bg-neutral-200/80 hover:bg-neutral-100 border-black border-[1px]"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
