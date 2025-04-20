"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { actionUpdateEvent } from "@/src/util/actions/events";
import { Event } from "@/src/util/dataTypes";
import { fetchEventById } from "@/src/util/actions/events";
import { datetimeLocalToDate, dateToDatetimeLocal } from "@/src/util/date";
import Link from "next/link";

type ModifyEventFormProps = {
    eventId: number | null;
};

export default function ModifyEventForm({ eventId }: ModifyEventFormProps) {
    const [event, setEvent] = useState<Event | null>(null);
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    // Event information
    const [eventName, setEventName] = useState<string>("");
    const [eventDescription, setEventDescription] = useState<string>("");
    const [eventStart, setEventStart] = useState<Date | null>(null);
    const [eventEnd, setEventEnd] = useState<Date | null>(null);
    const [eventLocation, setEventLocation] = useState<string | null>(null);
    const [eventAttendanceAmount, setEventAttendanceAmount] =
        useState<number>(0);

    // Format Date as YYYY-MM-DDThh:mm
    const formatDateForInput = (date: Date | null): string => {
        if (!date) return "";
        return dateToDatetimeLocal(date);
    };

    const handleDateChange = (
        value: string,
        setter: React.Dispatch<React.SetStateAction<Date | null>>,
    ) => {
        setter(value ? datetimeLocalToDate(value) : null);
    };

    // Fetch event data whenver eventId changes
    useEffect(() => {
        async function loadEvent() {
            if (eventId === null) return;

            const event = await fetchEventById(eventId);

            setEvent(event);

            // Update form fields when event data changes
            if (event) {
                setEventName(event.name);
                setEventDescription(event.description || "Event Description");
                setEventStart(event.start);
                setEventEnd(event.end);
                setEventLocation(event.location);
                setEventAttendanceAmount(event.attendanceAmount);
            }
        }

        loadEvent();
    }, [eventId]);

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
            eventLocation,
            eventAttendanceAmount,
        );

        // doing this to satisfy eslint
        console.log("eventData:", data);

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
        <div className="h-[80vh] w-full grid place-content-center">
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
                            value={eventAttendanceAmount.toString()}
                            type="number"
                            min={0}
                            step={5}
                            onChange={(e) =>
                                setEventAttendanceAmount(Number(e.target.value))
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
        </div>
    );
}
