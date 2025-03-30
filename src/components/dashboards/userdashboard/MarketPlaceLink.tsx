"use client";

import React from "react";
import Link from "next/link";
import Button from "@/src/components/Button";

function MarketPlaceLink() {
    //TODO THE LINK TO THE MARKETPLACE PAGE COULD CHANGE, BEWARE OF THIS

    return (
        <Link href={"/marketplace"}>
            <Button onClick={() => {}} className="text-[1rem]">
                Marketplace
            </Button>
        </Link>
    );
}

export default MarketPlaceLink;
