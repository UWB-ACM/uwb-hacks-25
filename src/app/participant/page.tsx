import React from "react";
import QRCode from "react-qr-code";
import { getSession } from "@/src/util/session";
import {
  getBalanceForUser,
  getTransactionsForUser,
} from "@/src/util/db/transaction";

export default async function page() {
  const data = await getSession();

  return (
    <div className="pt-20 px-[5%]">
      <div className="flex pb-10">
        {/* Profile heading */}
        <div className="rounded-full w-20 h-20 bg-[lightgray] text-center">
          pfp
        </div>
        <div className="ml-4 pr-24">
          <div className="mb-1">
            {data.user?.name ?? "Unauthenticated User"}
          </div>
          <div>
            Hackeroons:{" "}
            {data.user?.id
              ? (await getBalanceForUser(data.user.id)).toString()
              : "N/A"}
          </div>
        </div>
        {/* QR code */}
        <div>
          <QRCode
            size={64}
            value={data.user?.id?.toString?.() ?? "No ID"}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>

      {/* Hackeroon history */}
      <div>
        <div>Transaction History</div>
        {(data.user?.id ? await getTransactionsForUser(data.user.id) : []).map(
          (transaction) => (
            <div key={transaction.id}>
              [{transaction.type}] H${transaction.amount} {transaction.event}{" "}
              {transaction.prize} {transaction.time.toString()}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
