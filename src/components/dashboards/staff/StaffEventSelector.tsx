"use client";

import React, { Dispatch, SetStateAction } from "react";
import Selector from "@/src/components/dashboards/staff/Selector";
import { Event } from "@/src/util/dataTypes";

type StaffEventSelectorProps = {
    events: Promise<Event[]>;
    setEventId: Dispatch<SetStateAction<number | null>>;
};

export default function StaffEventSelector({
    events,
    setEventId,
}: StaffEventSelectorProps) {
    return (
        <Selector
            items={events}
            buttonName="Select Event"
            id={(event) => event.id}
            title={(event) => event.name}
            description={(event) => event.description || "event description"}
            onClick={(event) => {
                setEventId(event.id);
            }}
        />
    );
}
