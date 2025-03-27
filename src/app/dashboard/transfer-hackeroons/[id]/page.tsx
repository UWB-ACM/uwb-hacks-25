import { getSession } from "@/src/util/session";
import React from "react";
import TransferHackaroonsPage from "./TransferHackaroonsPage";
import { Metadata } from "next";
import { ensureStaffPermission, extractStaffUserData } from "@/src/util/staff";

export const metadata: Metadata = {
    title: "Transfer Hackaroons | UWB Hacks 25",
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const session = await getSession();
    await ensureStaffPermission(session);

    const user = await extractStaffUserData((await params).id);

    return <TransferHackaroonsPage user={user} />;
}
