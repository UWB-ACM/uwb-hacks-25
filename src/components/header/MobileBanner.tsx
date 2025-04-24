import React from "react";
import Link from "next/link";

type BannerProps = {
    bannerVisible: boolean;
};

function MobileBanner({ bannerVisible }: BannerProps) {
    return (
        <>
            {bannerVisible && (
                <div className="bg-orange-500 text-[9px] text-white font-rubik-mono-one justify-center items-center flex flex-col h-14">
                    <p>Learn how to earn and spend your Hackeroons!</p>
                    <div className="w-4"></div>

                    <Link
                        href={"/hackeroon-guide"}
                        className="text-white font-bold hover:underline"
                    >
                        <p className="underline cursor-pointer">
                            Open Hackeroon Guide
                        </p>
                    </Link>
                </div>
            )}
        </>
    );
}

export default MobileBanner;
