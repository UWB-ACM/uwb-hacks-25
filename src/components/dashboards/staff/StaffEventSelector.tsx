"use client";

import React, { Dispatch, SetStateAction } from "react";
import Selector from "@/src/components/dashboards/staff/Selector";
import { Event } from "@/src/util/dataTypes";

type StaffEventSelectorProps = {
    events: Promise<Event[]>;
    setEventId: Dispatch<SetStateAction<number | null>>;
    setEventName: Dispatch<SetStateAction<string | null>>;
};

export default function StaffEventSelector({
    events,
    setEventId,
    setEventName,
}: StaffEventSelectorProps) {
    return (
        <Selector
            items={events}
            buttonName="Select Event"
            dialogName="Event Selector"
            id={(event) => event.id}
            title={(event) => event.name}
            description={(event) => event.description || "event description"}
            onClick={(event) => {
                setEventId(event.id);
                setEventName(event.name);
            }}
        />
    );
}
