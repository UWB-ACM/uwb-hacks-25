import React from "react";

type CarouselControlsProps = {
    children: React.ReactNode;
    onClick: () => void;
};

export default function CarouselControls({
    onClick,
    children,
}: CarouselControlsProps) {
    return (
        <div className="z-[5] w-[15%] flex justify-center items-center">
            <button
                onClick={onClick}
                className="hover:bg-[#FFCA3A] transition  hover:scale-110 w-full md:w-[75%] lg:w-full xl:w-[80%] max-w-[55px] aspect-square bg-white border-2 border-black"
            >
                {children}
            </button>
        </div>
    );
}
