import React from "react";
import { getPrizes } from "@/src/util/db/prize";
import PrizeClientWrapper from "./PrizeClientWrapper";
import { getSession } from "@/src/util/session";
import { ensureStaffPermission } from "@/src/util/staff";

export default async function ModifyPrizePage() {
    const session = await getSession();
    await ensureStaffPermission(session);

    const prizes = getPrizes();

    return (
        <div className="w-full min-h-screen">
            <PrizeClientWrapper prizes={prizes} />
        </div>
    );
}
