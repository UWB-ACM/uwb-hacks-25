"use client";

import React, { useEffect, useState, useRef } from "react";

export default function TempCodeGenerator() {
    const [duration, setDuration] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

    const cachedCode = typeof window !== "undefined" ? sessionStorage.getItem("currentCode") : null;
    const [currentCode, setCode] = useState<string | null>(cachedCode);
    const [loading, setLoading] = useState(false);

    const cachedTimestamp = typeof window !== "undefined" ? sessionStorage.getItem("startingTimestamp") : null;
    const [countdown, setCountdown] = useState<number>(
        cachedTimestamp ? Math.max(Math.floor((Date.parse(cachedTimestamp) - Date.now()) / 1000), 0) : 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(parseInt(e.target.value));
    };

    async function onClick() {
        if (loading) return; // Prevent multiple clicks while loading

        setLoading(true);
        const res = await fetch("/api/temp-code/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ duration, currentCode }),
        });
        const data = await res.json();
        setLoading(false);
        setCode(data.key);
        setCountdown(duration); // Set the countdown to the duration

        // Store the timestamp and code in session storage
        const newTimestamp = new Date(Date.now() + duration * 1000).toISOString();
        sessionStorage.setItem("startingTimestamp", newTimestamp);
        sessionStorage.setItem("currentCode", data.key);
    }

    useEffect(() => {
        if (countdown === 0 && intervalRef.current) {
            clearInterval(intervalRef.current); // Clear the previous interval if it exists
            intervalRef.current = null; // Reset the ref to null
        }

        if (countdown > 0 && !intervalRef.current) {
            // Start the countdown
            intervalRef.current = setInterval(() => {
                setCountdown((prev) => Math.max(prev - 1, 0));
            }, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current); // Cleanup interval on unmount
                intervalRef.current = null;
            }
        };
    }, [countdown]);

    return (
        <div>
            <input type="number" value={duration.toString()} onChange={handleChange} />
            <button
                className={"p-3 rounded-md " + (loading ? "bg-gray-200" : "bg-green-400")}
                onClick={onClick}
            >
                {loading ? "Loading..." : "Create"}
            </button>
            <h1>{currentCode}</h1>

            <div>Countdown: {countdown}</div>
        </div>
    );
}
