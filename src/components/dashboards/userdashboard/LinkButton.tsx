"use client";

import React from "react";
import Button from "@/src/components/Button";

function MarketPlaceLink({ href, text }: { href: string; text: string }) {
    //TODO THE LINK TO THE MARKETPLACE PAGE COULD CHANGE, BEWARE OF THIS

    return <Button href={href}>{text}</Button>;
}

export default MarketPlaceLink;
