import Image from "next/image";
import React from "react";
import { Prize } from "@/src/util/dataTypes";
import { retrievePrizeImage } from "@/src/util/prizeImage";

type HackeroonItemCardProps = {
    cardRef: React.RefObject<HTMLDivElement | null>;
    hackeroonPrize: Prize;
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
            <div className="w-full p-4 mt-2 bg-white flex justify-center rounded-md border border-black">
                <Image
                    src={retrievePrizeImage(hackeroonPrize.imageName)}
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
