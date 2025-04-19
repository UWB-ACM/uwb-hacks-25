"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { actionUpdatePrize } from "@/src/util/actions/prize";
import { Prize } from "@/src/util/dataTypes";
import { fetchPrizeById } from "@/src/util/actions/prize";
import Link from "next/link";

type ModifyPrizeFormProps = {
    prizeId: number | null;
};

export default function ModifyPrizeForm({ prizeId }: ModifyPrizeFormProps) {
    const [prize, setPrize] = useState<Prize | null>(null);
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    // Prize information
    const [prizeName, setPrizeName] = useState<string>("");
    const [prizeDescription, setPrizeDescription] = useState<string>("");
    const [prizeInitialStock, setPrizeInitialStock] = useState<string>("");
    const [prizePrice, setPrizePrice] = useState<string>("");
    const [prizeImageName, setPrizeImageName] = useState<string>("");

    // Fetch prize data whenver prizeId changes
    useEffect(() => {
        async function loadPrize() {
            if (prizeId === null) return;

            const prize = await fetchPrizeById(prizeId);

            setPrize(prize);

            // Update form fields when prize data changes
            if (prize) {
                setPrizeName(prize.name);
                setPrizeDescription(prize.description || "Prize Description");
                setPrizeInitialStock(prize.initialStock.toString());
                setPrizePrice(prize.price.toString());
                setPrizeImageName(prize.imageName?.toString() || "");
            }
        }

        loadPrize();
    }, [prizeId]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Error handling:
        /*
            1. Prizes should not have a negative stock
            2. Prizes should not have a negative price
            */

        if (isNaN(Number(prizeInitialStock)) || isNaN(Number(prizePrice))) {
            setError("Initial stock and price must consist of only numbers!");
            return;
        }

        if (Number(prizeInitialStock) < 0) {
            setError("Prizes must have a non-negative initial stock");
            return;
        }

        if (Number(prizePrice) < 0) {
            setError("Prizes must have a non-negative price");
            return;
        }

        if (prize === null) {
            setError("Prize not found");
            return;
        }

        setError(null);

        // useless unless we add a confirmation page that the prize has been updated (good idea!!)
        const data = await actionUpdatePrize(
            prize.id,
            prizeName,
            prizeDescription,
            Number(prizeInitialStock),
            Number(prizePrice),
            prizeImageName,
        );

        // doing this to satisfy eslint
        console.log("prizeData:", data);

        router.push("/dashboard");
    };

    if (prize === null || prizeId === null) {
        return (
            <div className="mt-4 w-full grid place-content-center">
                <div className="p-4 border-black border rounded-lg bg-white">
                    You must select a prize first!
                </div>
            </div>
        );
    }

    return (
        <div className="mt-4 w-full grid place-content-center">
            {/* Modal Container, will extract into separate component
                This just stores the form that the user would enter new prize info into */}
            <div>
                <form
                    onSubmit={handleUpdate}
                    className="p-4 border-black border rounded-lg bg-white"
                >
                    <h2 className="text-xl md:text-2xl text-center font-semibold">
                        Modify Prize
                    </h2>
                    <div className="grid md:grid-cols-2 md:gap-y-4 mt-4">
                        {/* Prize Name */}
                        <label
                            htmlFor="prizeName"
                            className="flex items-center"
                        >
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
                            onChange={(e) =>
                                setPrizeDescription(e.target.value)
                            }
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
                            value={prizeInitialStock}
                            placeholder="Enter initial stock of prize"
                            onChange={(e) => {
                                setPrizeInitialStock(e.target.value);
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
                            value={prizePrice}
                            placeholder="Enter price of prize"
                            onChange={(e) => {
                                setPrizePrice(e.target.value);
                            }}
                            required
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
                        <p className="mt-4 text-red-600 text-center">{error}</p>
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
        </div>
    );
}
