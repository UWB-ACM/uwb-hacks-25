"use client";
import Button from "@/src/components/Button";
import React from "react";

function SupportSection() {
    return (
        <Button
            href={
                "https://docs.google.com/forms/d/e/1FAIpQLSeE5tYU3c8GZ20H1PPZS2-yjZ89tROgPMQRtsybsJ6j10iv4A/viewform?usp=sharing"
            }
            target={"_"}
            color="yellow"
        >
            Contact Support
        </Button>
    );
}

export default SupportSection;
