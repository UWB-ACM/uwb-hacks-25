"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { actionCreateEvent } from "@/src/util/actions/events";

export default function CreateEventPage() {
    const router = useRouter();

    const [error, setError] = useState("");

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // return if eventEnd time is before eventStart time
        if (eventEnd !== null && eventEnd <= eventStart) {
            setError("Event end time must be after event start time!");
            return;
        } else {
            setError("");
        }

        const data = await actionCreateEvent(
            eventName,
            eventDescription,
            eventStart,
            eventEnd,
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
                            eventStart
                                ? eventStart.toISOString().slice(0, 16)
                                : ""
                        }
                        onChange={(e) => {
                            const date = new Date(e.target.value);
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
                        value={
                            eventEnd ? eventEnd.toISOString().slice(0, 16) : ""
                        }
                        onChange={(e) => {
                            const date = e.target.value
                                ? new Date(e.target.value)
                                : null;
                            setEventEnd(date);
                        }}
                        className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                    />
                </div>
                {error && (
                    <p className="mt-4 text-red-600 text-center">{error}</p>
                )}
                <button
                    type="submit"
                    className="mt-4 py-2 px-4 rounded-md bg-neutral-200/80 hover:bg-neutral-100 border-black border-[1px]"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
