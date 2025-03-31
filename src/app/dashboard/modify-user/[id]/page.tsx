import React from "react";
import { getSession } from "@/src/util/session";
import {
    getBalanceForUser,
    getTransactionsForUser,
} from "@/src/util/db/transaction";
import { Metadata } from "next";
import {
    ensureStaffPermission,
    extractDashboardUserData,
} from "@/src/util/staff";
import { redirect } from "next/navigation";
import { ModifyUserPage } from "@/src/app/dashboard/modify-user/[id]/ModifyUserPage";

export const metadata: Metadata = {
    title: "Modify User | UWB Hacks 25",
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const session = await getSession();
    const permission = await ensureStaffPermission(session);

    const selectedID = (await params).id;
    const id = parseInt(selectedID);

    if (isNaN(id)) {
        return redirect("/dashboard");
    }

    const [user, balance, history] = await Promise.all([
        extractDashboardUserData(selectedID),
        getBalanceForUser(id),
        getTransactionsForUser(id),
    ]);

    // returning the card with user information
    return (
        <ModifyUserPage
            user={user}
            balance={balance}
            history={history}
            permission={permission}
            session={session}
        />
    );
}
