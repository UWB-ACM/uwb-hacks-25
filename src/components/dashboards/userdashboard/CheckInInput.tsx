"use client";

import React, { useState } from "react";
import { actionValidateCheckin } from "@/src/util/actions/checkIn";
import { Event } from "@/src/util/dataTypes";
import DashboardFeedback from "@/src/components/dashboards/DashboardFeedback";

function CheckInInput() {
    const [code, setCode] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkinRes, setCheckinRes] = useState<
        Event | { alreadyCheckin: boolean } | null
    >(null);

    async function validateCheckIn() {
        const valid = await actionValidateCheckin(code);

        setIsModalOpen(true);
        setCheckinRes(valid);
    }

    let dialogTitle;
    let dialogBody;

    if (!checkinRes) {
        // Failed.
        dialogTitle = "Check-in Failed";
        dialogBody =
            "Please ensure that the code is correct and try again. If you continue to receive this message, talk to the staff member who gave you the code.";
    } else if (
        checkinRes &&
        typeof checkinRes === "object" &&
        "alreadyCheckin" in checkinRes
    ) {
        // Already.
        dialogTitle = "Already Checked-in";
        dialogBody = "You have already checked in to this event.";
    } else {
        // Success.
        dialogTitle = "Check-in Success";
        dialogBody = `You have successfully checked in to ${checkinRes.name}, and ${checkinRes.attendanceAmount} Hackeroons have been credited to your account.`;
    }

    return (
        <>
            <div className="flex">
                <input
                    type="text"
                    className="min-w-20 min-h-10 "
                    onChange={(e) => setCode(e.target.value)}
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

            <DashboardFeedback
                open={isModalOpen}
                setOpen={setIsModalOpen}
                title={dialogTitle}
                description={dialogBody}
            />
        </>
    );
}

export default CheckInInput;
