"use client";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        fetch("/api/test")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Failed to load data:", error));
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            hello world
        </div>
    );
}
