import React from "react";
import Image from "next/image";

type MysteryBoxContainerProps = {
    className?: string;
};

export default function MysteryBoxContainer({
    className,
}: MysteryBoxContainerProps) {
    return (
        <div className={className}>
            <Image
                src={"/tracksSection/mystery-box-optimized.svg"}
                alt={"Question Mark"}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
            />
        </div>
    );
}
