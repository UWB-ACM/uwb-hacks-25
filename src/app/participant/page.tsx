import React, { Suspense } from "react";
import { getSession } from "@/src/util/session";
import {
    getBalanceForUser,
    getTransactionsForUser,
} from "@/src/util/db/transaction";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const QRCode = dynamic(() => import("react-qr-code"));

export default async function page() {
    const data = await getSession();

    if (data.user?.id == null) {
        redirect("/api/auth/google");
    }

    return (
        <div className="pt-20 px-[5%]">
            <div className="flex pb-10">
                {/* Profile heading */}
                <div className="rounded-full w-20 h-20 bg-[lightgray] text-center">
                    pfp
                </div>
                <div className="ml-4 pr-24">
                    <div className="mb-1">{data.user.name}</div>
                    <div>
                        Hackeroons: {await getBalanceForUser(data.user.id)}
                    </div>
                </div>
                {/* QR code */}
                <div>
                    <Suspense>
                        <QRCode
                            size={64}
                            value={`https://uwbhacks.com/staff/user/${data.user.id}`}
                            viewBox={`0 0 256 256`}
                        />
                    </Suspense>
                </div>
            </div>

            {/* Hackeroon history */}
            <div>
                <div>Transaction History</div>
                {(await getTransactionsForUser(data.user.id)).map(
                    (transaction) => (
                        <div key={transaction.id}>
                            [{transaction.type}] H${transaction.amount}{" "}
                            {transaction.event} {transaction.prize}{" "}
                            {transaction.time.toString()}
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}
