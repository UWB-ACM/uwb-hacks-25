"use client";

import React, { useState } from "react";
import { actionValidateCheckin } from "@/src/util/actions/checkIn";

function CheckInInput() {
    const [code, setCode] = useState<string>("");

    async function validateCheckIn() {
        const valid = await actionValidateCheckin(code);
        if (valid) {
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
                onChange={(e) => setCode(e.target.value)}
                onPaste={(e) => {
                    e.preventDefault();
                }}
            />
            <button
                onClick={validateCheckIn}
                className="w-20 h-10 bg-blue-500 text-white"
            >
                Check In
            </button>
        </div>
    );
}

export default CheckInInput;
