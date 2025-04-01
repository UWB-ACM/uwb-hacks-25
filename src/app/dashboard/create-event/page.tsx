import React from "react";
import CreateEventPage from "@/src/app/dashboard/create-event/CreateEventPage";
import { getSession } from "@/src/util/session";
import { ensureStaffPermission } from "@/src/util/staff";

export default async function Page() {
    const session = await getSession();
    await ensureStaffPermission(session);

    return <CreateEventPage />;
}
