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
            className="item-card w-[80%] p-4 shadow-[3px_3px_0_rgb(0,0,0,1)] rounded-tr-lg rounded-bl-lg border-black border-2 bg-[#FFCA3A]"
        >
            {/* Prize Name */}
            <p className="font-san-marino-beach text-center text-lg md:text-xl lg:text-2xl">
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
            <p className="text-center mt-2 font-rubik-mono-one">
                {hackeroonPrize.price} Hackeroons
            </p>
        </div>
    );
}
