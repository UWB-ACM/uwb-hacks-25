import React from "react";
import Image from "next/image";

type MysteryBoxLidProps = {
    ref: React.RefObject<HTMLDivElement | null>;
    className?: string;
};

export default function MysteryBoxLid({ className, ref }: MysteryBoxLidProps) {
    return (
        <div ref={ref} className={className}>
            <Image
                src={"/tracksSection/mystery-box-lid-optimized.svg"}
                alt={"Question Mark"}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
            />
        </div>
    );
}
