"use client";

import React, { useEffect, useState, useRef } from "react";
import { SessionUser } from "@/src/util/session";
import { CheckInInfo } from "@/src/util/dataTypes";

export default function CheckInCodeGenerator({ user }: { user: SessionUser }) {
    const [duration, setDuration] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

    const cachedCode = sessionStorage.getItem("currentCode");
    const [currentCode, setCode] = useState<string>(cachedCode || null);
    const [loading, setLoading] = useState(false);

    const cachedTimestamp =
        typeof window !== "undefined"
            ? sessionStorage.getItem("startingTimestamp")
            : null;
    const [countdown, setCountdown] = useState<number>(
        cachedTimestamp
            ? Math.max(
                  Math.floor((Date.parse(cachedTimestamp) - Date.now()) / 1000),
                  0,
              )
            : 0,
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(parseInt(e.target.value));
    };

    //TODO RIGHT NOW THE TRANSACTION AMOUNT IS UNKNOWN WE HAVE TO SET IT OURSELVES
    const body: CheckInInfo = {
        duration,
        currentCode,
        authorized_by: user.id,
        amount: 100,
        event: null,
    };

    async function onClick() {
        if (loading) return; // Prevent multiple clicks while loading
        setLoading(true);
        const res = await fetch("/api/temp-code/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        setLoading(false);
        setCode(data.code);
        setCountdown(duration); // Set the countdown to the duration

        // Store the timestamp and code in session storage
        const newTimestamp = new Date(
            Date.now() + duration * 1000,
        ).toISOString();
        sessionStorage.setItem("startingTimestamp", newTimestamp);
        sessionStorage.setItem("currentCode", data.code);
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
            <input
                type="number"
                value={duration.toString()}
                onChange={handleChange}
            />
            <button
                className={
                    "p-3 rounded-md " +
                    (loading ? "bg-gray-200" : "bg-green-400")
                }
                onClick={onClick}
            >
                {loading ? "Loading..." : "Create"}
            </button>
            <h1>{currentCode}</h1>

            <div>Countdown: {countdown}</div>
        </div>
    );
}
