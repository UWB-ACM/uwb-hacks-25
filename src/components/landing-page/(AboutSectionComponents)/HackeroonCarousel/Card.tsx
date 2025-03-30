import Image from "next/image";
import React from "react";

type HackeroonPrize = {
    name: string;
    price: number;
    image: string;
};

type HackeroonItemCardProps = {
    cardRef: React.RefObject<HTMLDivElement | null>;
    hackeroonPrize: HackeroonPrize;
};

export default function HackeroonItemCard({
    cardRef,
    hackeroonPrize,
}: HackeroonItemCardProps) {
    return (
        <div
            ref={cardRef}
            className="item-card w-[80%] p-4 rounded-lg bg-[#FFCA3A]"
        >
            {/* Prize Name */}
            <p className="text-center text-lg md:text-xl lg:text-2xl">
                {hackeroonPrize.name}
            </p>
            {/* Prize Image */}
            <div className="w-full p-4 mt-2 bg-gray-200 flex justify-center rounded-md border border-black">
                <Image
                    src={hackeroonPrize.image}
                    alt={"Image of " + hackeroonPrize.name}
                    width={100}
                    height={100}
                />
            </div>
            {/* Prize Prize */}
            <p className="text-center mt-2">
                {hackeroonPrize.price} Hackeroons
            </p>
        </div>
    );
}
