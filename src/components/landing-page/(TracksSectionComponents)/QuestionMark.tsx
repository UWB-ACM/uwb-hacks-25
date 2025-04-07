import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type QuestionMarkProps = {
    className?: string;
};

export default function QuestionMark({ className }: QuestionMarkProps) {
    return (
        <div className={twMerge(clsx("absolute opacity-10", className))}>
            <Image
                src={"/tracksSection/question-mark-optimized.svg"}
                alt={"Question Mark"}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
            />
        </div>
    );
}
