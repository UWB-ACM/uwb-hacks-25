import React from "react";
import { getEvents } from "@/src/util/db/event";
import EventClientWrapper from "./EventClientWrapper";
import { getSession } from "@/src/util/session";
import { ensureStaffPermission } from "@/src/util/staff";

export default async function ModifyEventPage() {
    const session = await getSession();
    await ensureStaffPermission(session);

    const events = getEvents();

    return (
        <div className="w-full min-h-screen">
            <EventClientWrapper events={events} />
        </div>
    );
}
