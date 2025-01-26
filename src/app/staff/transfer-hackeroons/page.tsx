import { getSession } from "@/src/util/session";
import React from "react";
import TransferHackaroonsPage from "@/src/app/staff/transfer-hackeroons/TransferHackaroonsPage";

export default async function Page() {
    // TODO: Make this apply to the scanned user, not the staff member.
    const session = await getSession();

    // The user must exist.
    if (!session.user?.id) {
        return <>A user must be selected first.</>;
    }

    const user = session.user;

    return <TransferHackaroonsPage user={user} />;
}
