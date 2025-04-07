import React from "react";
import Link from "next/link";

type BannerProps = {
    bannerVisible: boolean;
    setBannerVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function DesktopBanner({ bannerVisible, setBannerVisible }: BannerProps) {
    return (
        <>
            {bannerVisible && (
                <div className="bg-orange-500 text-lg text-white font-rubik-mono-one justify-center items-center flex h-10">
                    <p>Month of Hacking is live!</p>
                    <div className="w-4"></div>

                    <Link
                        href={"/month-of-hacking"}
                        className="text-white font-bold hover:underline"
                    >
                        <p className="underline cursor-pointer">Learn More</p>
                    </Link>
                    <button
                        className="absolute right-10"
                        onClick={() => setBannerVisible(false)}
                    >
                        X
                    </button>
                </div>
            )}
        </>
    );
}

export default DesktopBanner;
