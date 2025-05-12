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
                    <p>Shape the Future of ACM!</p>
                    <div className="w-4"></div>

                    <Link
                        href={
                            "https://docs.google.com/forms/d/e/1FAIpQLSeH9UCGpnL1NEhQ0HwVzNRvsqEN2bt8NAvJMFRJ8ndWG0YGzg/viewform"
                        }
                        className="text-white font-bold hover:underline"
                    >
                        <p className="underline cursor-pointer">
                            Officer Applications Open!
                        </p>
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
