"use client";

import React, { useState } from "react";
import StaffEventSelector from "@/src/components/dashboards/staff/StaffEventSelector";
import ModifyEventForm from "@/src/components/dashboards/staff/ModifyEventForm";
import { Event } from "@/src/util/dataTypes";

type EventClientWrapperProps = {
    events: Promise<Event[]>;
};

export default function EventClientWrapper({
    events,
}: EventClientWrapperProps) {
    const [eventId, setEventId] = useState<number | null>(null);

    return (
        <>
            <div className="w-full flex justify-center">
                <StaffEventSelector
                    events={events}
                    setEventId={(id) => setEventId(id)}
                />
            </div>

            <ModifyEventForm eventId={eventId} />
        </>
    );
}
