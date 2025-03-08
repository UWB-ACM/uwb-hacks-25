"use client";

import React from "react";
import Button from "@/src/components/Button";
function Page() {
    return (
        <div className="flex flex-col w-screen items-center">
            <div className="max-w-[800px] flex flex-col">
                <div className="text-center py-6 md:py-8 overflow-x-auto">
                    <h1 className="font-h1 text-4xl md:text-5xl">
                        {"Host a Workshop!"}
                    </h1>
                    <div className="w-full border-2 border-black bg-white p-3 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        <h3 className="font-rubik-mono font-bold text-xl">
                            {"What's a Workshop?"}
                        </h3>
                        <p className="w-full p-6 font-h3 text-sm md:text-base ">
                            A workshop is an immersive learning session where
                            participants dive deeper into tools, technologies,
                            or creative approaches guided by industry experts.
                            It’s a hands-on way to sharpen skills and spark new
                            ideas during the hackathon.
                        </p>
                    </div>
                    <div className="w-full border-2 border-black bg-white p-3 font-h3 text-sm md:text-base mt-4 md:mt-6">
                        <h3 className="font-rubik-mono font-bold text-xl">
                            {"Contact Us!"}
                        </h3>
                        <p className="w-full p-6 font-h3 text-sm md:text-base ">
                            We invite sponsors to add excitement by offering a
                            compelling grand prize—anything from advanced tech
                            gear to mentorship sessions. Your contribution
                            energizes the hackathon, showcases your support for
                            emerging talent, and leaves a lasting impact.
                        </p>
                        <Button className="text-[18px]" onClick={() => {}}>
                            Contact us here!
                        </Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
