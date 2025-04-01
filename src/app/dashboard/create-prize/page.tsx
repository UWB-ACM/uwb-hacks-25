import React from "react";
import { CreatePrizePage } from "@/src/app/dashboard/create-prize/CreatePrizePage";
import { getSession } from "@/src/util/session";
import { ensureStaffPermission } from "@/src/util/staff";

export default async function Page() {
    const session = await getSession();
    await ensureStaffPermission(session);

    return <CreatePrizePage />;
}
