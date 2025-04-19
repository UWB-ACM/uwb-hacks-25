"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { actionCreateEvent } from "@/src/util/actions/events";
import { datetimeLocalToDate, dateToDatetimeLocal } from "@/src/util/date";
import Link from "next/link";

export default function CreateEventPage() {
    const router = useRouter();

    const [error, setError] = useState<string | null>(null);

    // Event information
    const [eventName, setEventName] = useState<string>("");
    const [eventDescription, setEventDescription] = useState<string>("");
    // only doing this work around for eventStart to ensure it's never null
    // could be a better way
    const [eventStart, setEventStart] = useState<Date>(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
    });
    const [eventEnd, setEventEnd] = useState<Date | null>(null);
    const [eventLocation, setEventLocation] = useState<string | null>(null);
    const [eventAttendanceAmount, setEventAttendanceAmount] =
        useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // return if eventEnd time is before eventStart time
        if (eventEnd !== null && eventEnd <= eventStart) {
            setError("Event end time must be after event start time!");
            return;
        }

        // check if eventAttendanceAmount is a number
        if (isNaN(Number(eventAttendanceAmount))) {
            setError("Event attendance amount must consist of only digits");
            return;
        }

        setError(null);

        const data = await actionCreateEvent(
            eventName,
            eventDescription,
            eventStart,
            eventEnd,
            eventLocation,
            Number(eventAttendanceAmount),
        );

        // adding this to satisfy eslint
        console.log("eventData:", data);

        router.push("/dashboard");
    };

    return (
        <div className="w-full grid place-content-center">
            <form
                onSubmit={handleSubmit}
                className="p-4 border-black border rounded-lg bg-white"
            >
                <h2 className="text-xl md:text-2xl text-center font-semibold">
                    Create Event
                </h2>
                <div className="grid md:grid-cols-2 md:gap-y-4 mt-4">
                    {/* Event Name */}
                    <label htmlFor="eventName" className="flex items-center">
                        Event Name
                    </label>
                    <input
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Event Description */}
                    <label
                        htmlFor="eventDescription"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Event Description
                    </label>
                    <input
                        id="eventDescription"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Event Start Time */}
                    <label
                        htmlFor="eventStart"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Start Time
                    </label>
                    <input
                        id="eventStart"
                        type="datetime-local"
                        value={
                            eventStart ? dateToDatetimeLocal(eventStart) : ""
                        }
                        onChange={(e) => {
                            const date = datetimeLocalToDate(e.target.value);
                            setEventStart(date);
                        }}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Event End Time */}
                    <label
                        htmlFor="eventEnd"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        End Time (Optional)
                    </label>
                    <input
                        id="eventEnd"
                        type="datetime-local"
                        value={eventEnd ? dateToDatetimeLocal(eventEnd) : ""}
                        onChange={(e) => {
                            const date = e.target.value
                                ? datetimeLocalToDate(e.target.value)
                                : null;
                            setEventEnd(date);
                        }}
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Event Location */}
                    <label
                        htmlFor="eventLocation"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Event Location
                    </label>
                    <input
                        id="eventLocation"
                        value={eventLocation || ""}
                        onChange={(e) => setEventLocation(e.target.value)}
                        required
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />

                    {/* Event Attendance Amount */}
                    <label
                        htmlFor="eventAttendanceAmount"
                        className="flex items-center mt-4 md:mt-0"
                    >
                        Attendance Amount (H$)
                    </label>
                    <input
                        required
                        id="eventAttendanceAmount"
                        value={eventAttendanceAmount}
                        onChange={(e) =>
                            setEventAttendanceAmount(e.target.value)
                        }
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />
                </div>
                {error && (
                    <p className="mt-4 text-red-600 text-center font-bold">
                        {error}
                    </p>
                )}
                <div className="flex justify-between">
                    <Link
                        href="/dashboard"
                        className="min-w-[30%] mt-4 py-2 px-4 rounded-md bg-red-500 text-white text-center"
                    >
                        Exit
                    </Link>
                    <button
                        type="submit"
                        className="min-w-[30%] mt-4 py-2 px-4 rounded-md bg-green-600 hover:bg-green-500 text-white duration-200 border-black border-[1px]"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
