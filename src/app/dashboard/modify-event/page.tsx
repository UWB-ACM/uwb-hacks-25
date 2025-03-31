import React from "react";
import { getEvents } from "@/src/util/db/event";
import EventClientWrapper from "./EventClientWrapper";

export default function ModifyPrizePage() {
    const events = getEvents();

    return (
        <div className="w-screen min-h-screen">
            <EventClientWrapper events={events} />
        </div>
    );
}
