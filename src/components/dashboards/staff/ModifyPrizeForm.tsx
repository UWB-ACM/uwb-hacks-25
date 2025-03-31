"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { actionUpdatePrize } from "@/src/util/actions/prize";
import { Prize } from "@/src/util/dataTypes";
import { fetchPrizeById } from "@/src/util/actions/prize";

type ModifyPrizeFormProps = {
    prizeId: number | null;
    setPrizeId: Dispatch<SetStateAction<number | null>>;
};

export default function ModifyPrizeForm({
    prizeId,
    setPrizeId,
}: ModifyPrizeFormProps) {
    const [prize, setPrize] = useState<Prize | null>(null);
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    // Prize information
    const [prizeName, setPrizeName] = useState<string>("");
    const [prizeDescription, setPrizeDescription] = useState<string>("");
    const [prizeInitialStock, setPrizeInitialStock] = useState<string>("");
    const [prizePrice, setPrizePrice] = useState<string>("");

    // Fetch prize data whenver prizeId changes
    useEffect(() => {
        async function loadPrize() {
            if (prizeId === null) return;

            const prize = await fetchPrizeById(prizeId);

            setPrize(prize);
        }

        loadPrize();
    }, [prizeId]);

    // Update form fields when prize data changes
    useEffect(() => {
        if (prize) {
            setPrizeName(prize.name);
            setPrizeDescription(prize.description || "Prize Description");
            setPrizeInitialStock(prize.stock.toString());
            setPrizePrice(prize.price.toString());
        }
    }, [prize]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Error handling:
        /* 
            1. Prizes should not have a negative stock
            2. Prizes should not have a negative price
            */

        if (isNaN(Number(prizeInitialStock)) || isNaN(Number(prizePrice))) {
            setError("Initial stock and price must be a valid number!");
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
        );

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
                            onChange={(e) => {
                                setPrizePrice(e.target.value);
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
                        className="mt-4 py-2 px-4 rounded-md bg-white border-black border-[1px]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
