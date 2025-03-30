import React, { Suspense } from "react";
import { SessionUser } from "@/src/util/session";
import {
    getBalanceForUser,
    getTransactionsForUser,
} from "@/src/util/db/transaction";
import QRCode from "react-qr-code";
import SupportSection from "@/src/components/dashboards/userdashboard/SupportSection";
import MarketPlaceLink from "@/src/components/dashboards/userdashboard/MarketPlaceLink";
import CheckInInput from "./userdashboard/CheckInInput";

async function UserDashboard({ user }: { user: SessionUser }) {
    const balance = await getBalanceForUser(user.id);
    const transactions = await getTransactionsForUser(user.id);

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 py-10 flex flex-col gap-6">
            {/* User Info Section */}
            <div className="bg-neutral-100 border-2 py-5 rounded-xl border-black/60 shadow-xl flex flex-col items-center text-center">
                <div className="rounded-full w-20 h-20 bg-gray-300 flex items-center justify-center text-lg font-semibold">
                    PFP
                </div>
                <div className="mt-2 text-xl font-bold">{user.name}</div>
                <div className="text-sm text-gray-600">ID: {user.id}</div>
                <div className="mt-2 text-lg">
                    Hackeroons: <span className="font-semibold">{balance}</span>
                </div>
            </div>

            {/* QR Code and Check-In */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 flex flex-col items-center ">
                    <h2 className="text-lg font-semibold mb-2">Check-In</h2>
                    <CheckInInput />
                </div>
                <div className="bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 flex flex-col items-center ">
                    <h2 className="text-lg font-semibold mb-2">Your QR Code</h2>
                    <Suspense>
                        <QRCode
                            size={200}
                            style={{
                                width: "100%",
                                maxWidth: "200px",
                                height: "auto",
                            }}
                            value={`https://uwbhacks.com/dashboard/${user.id}`}
                            viewBox={`0 0 256 256`}
                        />
                    </Suspense>
                </div>
            </div>

            {/* Actions Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MarketPlaceLink />
                <SupportSection />
            </div>

            {/* Transaction History */}
            <div className="bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 overflow-y-auto max-h-96">
                <h2 className="text-lg font-semibold mb-4">
                    Transaction History
                </h2>
                <div className="space-y-2 text-sm">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className="border-b pb-2 last:border-b-0 last:pb-0"
                        >
                            <div>
                                <strong>[{transaction.type}]</strong> H$
                                {transaction.amount}
                            </div>
                            <div className="text-gray-600">
                                {transaction.event} {transaction.prize}
                            </div>
                            <div className="text-gray-400 text-xs">
                                {transaction.time.toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
