"use client";
import Button from "@/src/components/Button";
import React from "react";
import Link from "next/link";

function SupportSection() {
    // TODO: Add in URL.

    return (
        <Link href="#">
            <Button onClick={() => {}} className="text-[1rem]">
                Contact Support
            </Button>
        </Link>
    );
}

export default SupportSection;
