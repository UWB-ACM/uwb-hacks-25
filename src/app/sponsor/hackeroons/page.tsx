import React from "react";
import Image from "next/image";
import CoinImage from "@/public/Sponsor/Coin.png";

function Page() {
    return (
        <div className="flex flex-col w-screen items-center">
            <div className="max-w-[1000px] flex flex-col">
                <div className="flex justify-center">
                    <Image
                        src={CoinImage}
                        alt="Bouncing Left Icon"
                        width={100} // Set appropriate width
                        height={100} // Set appropriate height
                        className="animate-bounce"
                    ></Image>
                </div>
                <div className="text-center  p-6 md:p-8 mb-2 md:mb-4 px-4 overflow-x-auto">
                    <h1 className="font-rubik-mono-one text-4xl md:text-5xl">
                        Hackeroons
                    </h1>
                    <p className="pb-3 pl-6 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        Earn points, win prizes, and boost your hackathon
                        skills!
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
                <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-full h-full">
                    <h2 className="font-rubik-mono-one text-md md:text-lg">
                        Hackeroons!
                    </h2>
                    <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-full h-full">
                    <h2 className="font-rubik-mono-one text-md md:text-lg">
                        Hackeroons!
                    </h2>
                    <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-full h-full">
                    <h2 className="font-rubik-mono-one text-md md:text-lg">
                        Hackeroons!
                    </h2>
                    <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Page;
