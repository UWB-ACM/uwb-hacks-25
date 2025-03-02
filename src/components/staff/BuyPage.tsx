"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PrizeCard from "@/src/components/staff/PrizeCard";
import { Prize, TransactionType } from "@/src/util/dataTypes";
import { SessionUser } from "@/src/util/session";
import { actionCreateTransaction } from "@/src/util/actions/transactions";

export default function BuyPage({
  user,
  balance,
  prizes,
}: {
  user: SessionUser;
  balance: number;
  prizes: Prize[];
}) {
  const router = useRouter();

  const [hackeroonAmount, setHackeroonAmount] = useState(balance);
  const [selectedItems, setSelectedItems] = useState<Prize[]>([]);

  const handleSubmit = async () => {
    if (selectedItems.length !== 0) {
      for (const item of selectedItems) {
        const data = await actionCreateTransaction(
          user.id,
          TransactionType.PrizePurchase,
          // We need to subtract the item's price from the user's balance, not
          // add it.
          //
          // This also allows the staff to arbitrarily chose the price,
          // but since they can create arbitrary transactions anyway,
          // that doesn't matter.
          // This can only be ran by staff though, so users can't
          // decide their own prices.
          -item.price,
          null,
          item.id,
        );

        // TODO: Track which purchases failed.
        console.log(data);
      }

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
        <h1 className="text-center text-2xl md:text-3xl pb-4">Prizes</h1>
        <div className="flex justify-around gap-x-4 text-center text-xl md:text-2xl">
          <h2>
            Buying for <span className="font-bold">{user.name}</span>
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
        <div className="h-[85vh] w-[70vw] md:w-[80vw] lg:w-[85vw] p-8 overflow-scroll overflow-x-hidden grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((prize, index) => (
            <PrizeCard
              key={index}
              prize={prize}
              hackeroonAmount={hackeroonAmount}
              setHackeroonAmount={setHackeroonAmount}
              setSelectedItems={setSelectedItems}
            />
          ))}
        </div>

        {/* Shopping Cart / Selected Items */}
        <div className="h-[85vh] w-[30vw] md:w-[20vw] flex flex-col justify-between bg-neutral-100 border-l-[1px] border-black">
          {/* Selected Items */}
          <div className="p-4">
            <h2 className="text-center text-xl md:text-2xl">Selected Items</h2>
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
