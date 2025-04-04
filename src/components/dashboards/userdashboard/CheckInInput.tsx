"use client";

import React, { useState } from "react";

function CheckInInput() {
    const [value, setValue] = useState<string>("");

    async function validateCheckIn() {
        const res = await fetch("/api/temp-code/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code: value }),
        });

        const data = await res.json();
        if (data.valid) {
            alert("Check-in successful!");
        }
    }

    return (
        <div className="flex">
            <input
                type="text"
                className="min-w-20 min-h-10 "
                onChange={(e) => setValue(e.target.value)}
                onPaste={(e) => {
                    e.preventDefault();
                }}
            />
            <button
                onClick={validateCheckIn}
                className="min-w-20 min-h-10 bg-blue-500 text-white"
            >
                Check In
            </button>
        </div>
    );
}

export default CheckInInput;
