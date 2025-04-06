"use client";
import Image from "next/image";
import React from "react";
import MohSchedule from "@/public/monthOfHacking/mohschedule.png";

function Page() {
    return (
        <div className="p-10 w-full flex justify-center">
            <Image
                src={MohSchedule}
                className="max-w-[1200px] rounded-md"
                alt="image of schedule"
            />
        </div>
    );
}

export default Page;
