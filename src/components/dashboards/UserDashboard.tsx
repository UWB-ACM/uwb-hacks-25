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
import TempCodeGenerator from "@/src/components/dashboards/userdashboard/tempCodeGenerator";

async function UserDashboard({ user }: { user: SessionUser }) {
    return (
        <div className="w-screen w-max-[1000px] flex flex-col items-center pt-20 px-[5%]">
            <TempCodeGenerator />

            {/* User Info */}
            <div className="flex flex-col justify-center items-center bg-green-300">
                <div className="rounded-full w-20 h-20 bg-[lightgray] text-center">
                    pfp
                </div>
                <div className="flex">
                    <div className="mb-1">{user.name}</div>
                    <div className="mb-1">{user.id}</div>
                </div>
                <div>Hackeroons: {await getBalanceForUser(user.id)}</div>
            </div>

            <div className="flex">
                <div className="w-[200px] h-[200px] bg-red-500 flex justify-center items-center flex-col">
                    <h1 className="">User QR Code</h1>
                    <CheckInInput />
                </div>
                {/* QR code */}
                <div className="bg-orange-300 flex justify-center flex-col">
                    <h1>User QR Code</h1>
                    <Suspense>
                        <QRCode
                            size={200}
                            style={{ width: "200px" }}
                            value={`https://uwbhacks.com/dashboard/${user.id}`}
                            viewBox={`0 0 256 256`}
                        />
                    </Suspense>
                </div>
            </div>

            <div className="flex">
                {/* Marketplace link */}
                <MarketPlaceLink />

                {/* Get support button */}
                <SupportSection />
            </div>

            {/* Hackeroon history */}
            <div className="overflow-y-scroll">
                <div>Transaction History</div>
                {(await getTransactionsForUser(user.id)).map((transaction) => (
                    <div key={transaction.id}>
                        [{transaction.type}] H${transaction.amount}{" "}
                        {transaction.event} {transaction.prize}{" "}
                        {transaction.time.toString()}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserDashboard;
