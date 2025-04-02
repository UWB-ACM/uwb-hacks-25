"use client";

import React, { useEffect, useState, useRef } from "react";
import {
    actionGenerateCheckinCode,
    actionInvalidateCode,
} from "@/src/util/actions/checkIn";
import StaffEventSelector from "@/src/components/dashboards/staff/StaffEventSelector";
import { Event } from "@/src/util/dataTypes";

export default function CheckInCodeGenerator({
    events,
}: {
    events: Promise<Event[]>;
}) {
    const [duration, setDuration] = useState(0);
    const [eventId, setEventId] = useState<number | null>(null);

    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

    const [currentCode, setCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Load the cached code once we're on the browser.
    useEffect(() => {
        setCode(sessionStorage.getItem("currentCode"));
    }, []);

    const timestampToRemainingSeconds = (time: string): number =>
        Math.max(Math.floor((Date.parse(time) - Date.now()) / 1000), 0);

    const cachedTimestamp =
        typeof window !== "undefined"
            ? sessionStorage.getItem("startingTimestamp")
            : null;
    const [countdown, setCountdown] = useState<number>(
        cachedTimestamp ? timestampToRemainingSeconds(cachedTimestamp) : 0,
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(parseInt(e.target.value));
    };

    async function onClick() {
        if (!eventId || !duration) return;

        if (loading) return; // Prevent multiple clicks while loading
        setLoading(true);

        // Invalidate the previous code, if it exists and
        // is still active.
        if (
            currentCode &&
            cachedTimestamp &&
            timestampToRemainingSeconds(cachedTimestamp) > 0
        ) {
            await actionInvalidateCode(currentCode);

            sessionStorage.removeItem("startingTimestamp");
            sessionStorage.removeItem("currentCode");

            setCode(null);
            setCountdown(0);
        }

        const data = await actionGenerateCheckinCode(eventId, duration);
        setLoading(false);

        if (!data) return;

        setCode(data);
        setCountdown(duration); // Set the countdown to the duration

        // Store the timestamp and code in session storage
        const newTimestamp = new Date(
            Date.now() + duration * 1000,
        ).toISOString();
        sessionStorage.setItem("startingTimestamp", newTimestamp);
        sessionStorage.setItem("currentCode", data);
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
            <div className="w-full flex justify-center">
                <StaffEventSelector
                    events={events}
                    setEventId={(id) => setEventId(id)}
                />
            </div>

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
