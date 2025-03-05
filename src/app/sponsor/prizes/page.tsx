import React from "react";

function Page() {
    return (
        <div className="flex flex-col w-screen items-center">
            <div className="max-w-[1000px] flex flex-col">
                <div className="text-center p-6 md:p-8 mb-2 md:mb-4 px-4 overflow-x-auto">
                    <h1 className="font-rubik-mono-one text-4xl md:text-5xl">
                        Prizes
                    </h1>
                    <p className="pb-3 pl-6 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        Compete, innovate, and win amazing prizes!
                    </p>
                </div>
            </div>

            {/* Pyramid Structure */}
            <div className="flex flex-col gap-6 items-center w-full">
                {/* Row 1 (1 Box) */}
                <div className="flex justify-center w-full">
                    <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-[60%] lg:w-[30%]">
                        <h2 className="font-rubik-mono-one text-md md:text-lg">
                            Prizes!
                        </h2>
                        <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Row 2 (2 Boxes) */}
                <div className="flex justify-center gap-6 w-full">
                    <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-[45%] lg:w-[25%]">
                        <h2 className="font-rubik-mono-one text-md md:text-lg">
                            Prizes!
                        </h2>
                        <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-[45%] lg:w-[25%]">
                        <h2 className="font-rubik-mono-one text-md md:text-lg">
                            Prizes!
                        </h2>
                        <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Row 3 (3 Boxes) */}
                <div className="flex justify-center gap-6 w-full">
                    <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-[30%] lg:w-[20%]">
                        <h2 className="font-rubik-mono-one text-md md:text-lg">
                            Prizes!
                        </h2>
                        <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-[30%] lg:w-[20%]">
                        <h2 className="font-rubik-mono-one text-md md:text-lg">
                            Prizes!
                        </h2>
                        <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center text-center bg-white border-2 border-black p-4 w-[30%] lg:w-[20%]">
                        <h2 className="font-rubik-mono-one text-md md:text-lg">
                            Prizes!
                        </h2>
                        <ul className="text-left font-h3 text-sm md:text-base list-disc pl-4">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
