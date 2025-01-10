import React from "react";
import Image from "next/image";

type Prize = {
    name: string;
    description: string;
    stock: number;
    price: number;
};

type CardProps = {
    prize: Prize;
};

export default function Card({ prize }: CardProps) {
    return (
        <div className="flex flex-col justify-center p-8 min-h-[200px] bg-neutral-200 rounded-lg border-2 border-neutral-400 shadow-md">
            {/* Image */}
            <div className="h-[100px] flex justify-center py-4 my-4 bg-neutral-100 rounded-md">
                <Image
                    src={"/next.svg"}
                    height={200}
                    width={200}
                    alt={`Image of ${prize.name}`}
                    className="object-contain"
                />
            </div>
            {/* Stock and Price */}
            <div className="flex justify-around pb-4">
                <p>{`${prize.stock} Left!`}</p>
                <p>{`${prize.price} Hackeroons`}</p>
            </div>
            {/* Name */}
            <h2 className="text-center text-2xl">{prize.name}</h2>
            {/* Description */}
            <h3 className="text-center">{prize.description}</h3>
        </div>
    );
}
