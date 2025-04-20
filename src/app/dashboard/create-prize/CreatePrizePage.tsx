"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { actionCreatePrize } from "@/src/util/actions/prize";
import Link from "next/link";

export function CreatePrizePage() {
    const router = useRouter();

    const [error, setError] = useState<string | null>(null);

    // Prize information
    const [prizeName, setPrizeName] = useState<string>("");
    const [prizeDescription, setPrizeDescription] = useState<string>("");
    const [prizeInitialStock, setPrizeInitialStock] = useState<number>(0);
    const [prizePrice, setPrizePrice] = useState<number>(0);
    const [prizeImageName, setPrizeImageName] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Error handling:
        /*
        1. Prizes should not have a negative stock
        2. Prizes should not have a negative price
        */

        // check if prize initial stock is valid
        if (prizeInitialStock < 0) {
            setError("Prizes must have a non-negative initial stock!");
            return;
        }

        // check if prize price is valid
        if (prizePrice < 0) {
            setError("Prizes must have a price above 0 hackaroons!");
            return;
        }

        setError(null);

        // useless unless we add a confirmation page that the prize has been added (good idea!!)
        const data = await actionCreatePrize(
            prizeName,
            prizeDescription,
            prizeInitialStock,
            prizePrice,
            prizeImageName,
        );

        // adding this to satisfy eslint
        console.log("prizeData:", data);

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
                        required
                        id="prizeInitialStock"
                        value={prizeInitialStock.toString()}
                        type="number"
                        min={0}
                        step={5}
                        onChange={(e) =>
                            setPrizeInitialStock(Number(e.target.value))
                        }
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
                        required
                        id="prizePrice"
                        value={prizePrice.toString()}
                        type="number"
                        min={0}
                        step={5}
                        placeholder="Enter prize price"
                        onChange={(e) => setPrizePrice(Number(e.target.value))}
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Prize Image Name */}
                    <label
                        htmlFor="prizeImageName"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Prize Image Name
                    </label>
                    <input
                        id="prizeImageName"
                        value={prizeImageName}
                        onChange={(e) => setPrizeImageName(e.target.value)}
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />
                </div>
                {error && (
                    <p className="mt-4 text-red-600 text-center font-bold">
                        {error}
                    </p>
                )}
                <div className="flex justify-between">
                    <Link
                        href="/dashboard"
                        className="min-w-[30%] mt-4 py-2 px-4 rounded-md bg-red-500 text-white text-center"
                    >
                        Exit
                    </Link>
                    <button
                        type="submit"
                        className="min-w-[30%] mt-4 py-2 px-4 rounded-md bg-green-600 hover:bg-green-500 text-white duration-200 border-black border-[1px]"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
