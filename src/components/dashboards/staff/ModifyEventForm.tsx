"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { actionUpdateEvent } from "@/src/util/actions/events";
import { Event } from "@/src/util/dataTypes";
import { fetchEventById } from "@/src/util/actions/events";

type ModifyEventFormProps = {
    eventId: number | null;
    setEventId: Dispatch<SetStateAction<number | null>>;
};

export default function ModifyEventForm({
    eventId,
    setEventId,
}: ModifyEventFormProps) {
    const [event, setEvent] = useState<Event | null>(null);
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    // Event information
    const [eventName, setEventName] = useState<string>("");
    const [eventDescription, setEventDescription] = useState<string>("");
    const [eventStart, setEventStart] = useState<Date | null>(null);
    const [eventEnd, setEventEnd] = useState<Date | null>(null);

    // Format Date as YYYY-MM-DDThh:mm
    const formatDateForInput = (date: Date | null): string => {
        if (!date) return "";
        return date.toISOString().slice(0, 16);
    };

    const handleDateChange = (
        value: string,
        setter: React.Dispatch<React.SetStateAction<Date | null>>,
    ) => {
        setter(value ? new Date(value) : null);
    };

    // Fetch event data whenver eventId changes
    useEffect(() => {
        async function loadEvent() {
            if (eventId === null) return;

            const event = await fetchEventById(eventId);

            setEvent(event);
        }

        loadEvent();
    }, [eventId]);

    // Update form fields when prize data changes
    useEffect(() => {
        if (event) {
            setEventName(event.name);
            setEventDescription(event.description || "Event Description");
            setEventStart(event.start);
            setEventEnd(event.end);
        }
    }, [event]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Error handling:
        /* 
            1. Event end time should not happen before event start time
            */

        if (event === null || eventStart === null) {
            setError("Event not found");
            return;
        }

        if (eventEnd && eventEnd <= eventStart) {
            setError("Event end time cannot happen before its start time!");
            return;
        }

        setError(null);

        // useless unless we add a confirmation page that the prize has been updated (good idea!!)
        const data = await actionUpdateEvent(
            event.id,
            eventName,
            eventDescription,
            eventStart,
            eventEnd,
        );

        router.push("/dashboard");
    };

    if (event === null || eventId === null) {
        return (
            <div className="mt-4 w-full grid place-content-center">
                <div className="p-4 border-black border rounded-lg bg-white">
                    You must select an event first!
                </div>
            </div>
        );
    }

    return (
        <div className="mt-4 w-full grid place-content-center">
            {/* Modal Container, will extract into separate component 
                This just stores the form that the user would enter new prize info into */}
            <div>
                <form
                    onSubmit={handleUpdate}
                    className="p-4 border-black border rounded-lg bg-white"
                >
                    <h2 className="text-xl md:text-2xl text-center font-semibold">
                        Modify Event
                    </h2>
                    <div className="grid md:grid-cols-2 md:gap-y-4 mt-4">
                        {/* Event Name */}
                        <label
                            htmlFor="eventName"
                            className="flex items-center"
                        >
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
                            onChange={(e) =>
                                setEventDescription(e.target.value)
                            }
                            required
                            className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                        />

                        {/* Event Start Time */}
                        <label
                            htmlFor="eventStart"
                            className="flex items-center mt-4 md:mt-0"
                        >
                            Event Start Time
                        </label>
                        <input
                            id="eventStart"
                            type={"datetime-local"}
                            value={formatDateForInput(eventStart)}
                            onChange={(e) => {
                                handleDateChange(e.target.value, setEventStart);
                            }}
                            required
                            className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                        />

                        {/* Event End Time */}
                        <label
                            htmlFor="eventEnd"
                            className="flex items-center mt-4 md:mt-0"
                        >
                            Event End Time
                        </label>
                        <input
                            id="eventEnd"
                            type={"datetime-local"}
                            value={formatDateForInput(eventEnd)}
                            onChange={(e) => {
                                handleDateChange(e.target.value, setEventEnd);
                            }}
                            className="border-black border-[1px] p-2 rounded-md bg-neutral-100"
                        />
                    </div>
                    {error && (
                        <p className="mt-4 text-red-600 text-center">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="mt-4 py-2 px-4 rounded-md bg-white border-black border-[1px]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
