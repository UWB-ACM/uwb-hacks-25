import React from "react";
import { getPrizes } from "@/src/util/db/prize";
import { getSession } from "@/src/util/session";
import BuyPage from "@/src/components/staff/BuyPage";
import { getBalanceForUser } from "@/src/util/db/transaction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Prizes | UWB Hacks 25",
};

export default async function Page() {
  // TODO: Make this apply to the scanned user, not the staff member.

  const [prizes, { session, balance }] = await Promise.all([
    getPrizes(),
    // If the user is authenticated, get their balance as well.
    getSession().then((session) =>
      session.user?.id
        ? getBalanceForUser(session.user.id).then((balance) => ({
            session,
            balance,
          }))
        : { session, balance: 0 },
    ),
  ]);

  // The user must exist.
  if (!session.user?.id) {
    return <>A user must be selected first.</>;
  }

  return <BuyPage user={session.user} balance={balance} prizes={prizes} />;
}
