"use client";

import React, { useState } from "react";

function CheckInInput() {
    const [value, setValue] = useState<string>("");

    async function validateCheckIn() {

        const res = await fetch("/api/temp-code/validate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value })
        });
        
        const data = await res.json();
        if (data.valid === 1) {
            alert("Check-in successful!");
        }
    }

    return (
        <div className="flex">
            <input
                type="text"
                className="w-20 h-10 "
                name=""
                id=""
                onPaste={(e) => {
                    e.preventDefault();
                }}
            />
            <button onClick={validateCheckIn} className="w-20 h-10 bg-blue-500 text-white">
                Check In
            </button>
        </div>
    );
}

export default CheckInInput;
