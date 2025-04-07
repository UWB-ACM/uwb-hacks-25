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
                    <p>Month of Hacking is live!</p>
                    <div className="w-4"></div>

                    <Link
                        href={"/month-of-hacking"}
                        className="text-white font-bold hover:underline"
                    >
                        <p className="underline cursor-pointer">Learn More</p>
                    </Link>
                </div>
            )}
        </>
    );
}

export default MobileBanner;
