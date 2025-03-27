import React from "react";
import { getPrizes } from "@/src/util/db/prize";
import { getSession } from "@/src/util/session";
import BuyPage from "@/src/components/staff/BuyPage";
import { getBalanceForUser } from "@/src/util/db/transaction";
import { Metadata } from "next";
import { ensureStaffPermission, extractStaffUserData } from "@/src/util/staff";

export const metadata: Metadata = {
    title: "Buy Prizes | UWB Hacks 25",
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const session = await getSession();
    await ensureStaffPermission(session);

    const [prizes, { user, balance }] = await Promise.all([
        getPrizes(),
        extractStaffUserData((await params).id).then((user) =>
            getBalanceForUser(user.id).then((balance) => ({
                user,
                balance,
            })),
        ),
    ]);

    return <BuyPage user={user} balance={balance} prizes={prizes} />;
}
