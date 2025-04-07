import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Image from "next/image";

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
