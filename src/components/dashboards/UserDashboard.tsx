import React, { Suspense } from "react";
import { SessionUser } from "@/src/util/session";
import {
    getBalanceForUser,
    getTransactionsForUser,
} from "@/src/util/db/transaction";
import QRCode from "react-qr-code";
import Image from "next/image";
import Husky from "@/public/about/husky.png";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import CheckInInput from "@/src/components/dashboards/userdashboard/CheckInInput";
import MarketPlaceLink from "@/src/components/dashboards/userdashboard/MarketPlaceLink";
import SupportSection from "@/src/components/dashboards/userdashboard/SupportSection";

async function UserDashboard({ user }: { user: SessionUser }) {
    const transactions = await getTransactionsForUser(user.id);

    return (
        // User Dashboard Container
        <div className="w-[90%] mx-auto rounded-md sm:mt-[10rem]">
            {/* General User Information */}
            <div className="w-full flex flex-col gap-y-8 md:flex-row justify-around items-center md:px-14 lg:px-20">
                {/* User PFP, First and Last Name, & Hackeroon Amount */}
                <div className="w-full flex gap-x-8">
                    <Image
                        src={user.picture || Husky}
                        alt={"Your profile photo"}
                        width={150}
                        height={150}
                        className="w-full sm:max-w-[150px] rounded-full bg-white border-black border-2"
                    />
                    <div className="flex flex-col justify-around py-2">
                        <div>
                            <div className="text-2xl font-bold">
                                {user.name}
                            </div>
                            <div className="text-lg ">
                                {"User ID: " + user.id}
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2 text-xl">
                            <p>Hackeroons: </p>
                            <span className="font-bold text-3xl">
                                {await getBalanceForUser(user.id)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* User Unique QR Code */}
                <div>
                    <Suspense
                        fallback={
                            <div className="w-[150px] h-[150px] border-[1px] border-black bg-gray-400" />
                        }
                    >
                        <QRCode
                            size={150}
                            value={`https://uwbhacks.com/dashboard/${user.id}`}
                            viewBox={`0 0 256 256`}
                        />
                    </Suspense>
                    <h3 className="text-center text-lg mt-2">Your QR Code</h3>
                </div>
            </div>

            {/* Actions and Check-In */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
                <div className="bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 flex flex-col items-center ">
                    <h2 className="text-lg font-semibold mb-2">Check-In</h2>
                    <CheckInInput />
                </div>
                <div className="bg-neutral-100 border-2 border-black/60 shadow-xl rounded-xl p-4 flex flex-col items-center ">
                    <h2 className="text-lg font-semibold mb-2">
                        Quick Actions
                    </h2>
                    <div className="flex flex-col md:flex-row gap-5">
                        <MarketPlaceLink />
                        <SupportSection />
                    </div>
                </div>
            </div>

            {/* User Transaction History */}

            {/*
            id: 3,
            type: 0,
            amount: 100,
            event: "ai workshop",
            prize: "pat on the head",
            time: "4/27/2025",
            */}
            <div className="rounded-xl border border-gray-300 overflow-hidden shadow-sm mt-[2rem]">
                <h3 className="bg-white p-3 font-bold">
                    {" "}
                    Transaction History{" "}
                </h3>
                <div className="overflow-x-auto">
                    <Table className="w-full bg-white">
                        <TableCaption className="mt-0 p-2 text-gray-600 bg-gray-100 border-t border-gray-300">
                            A list of your recent transactions.
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="bg-[#f3f3f3] hover:bg-[#f3f3f3]">
                                <TableHead className="px-4 py-2 font-medium text-gray-500  border border-gray-300 whitespace-nowrap">
                                    Type
                                </TableHead>
                                <TableHead className="px-4 py-2 font-medium text-gray-500  border border-gray-300 whitespace-nowrap">
                                    Amount
                                </TableHead>
                                <TableHead className="px-4 py-2 font-medium text-gray-500  border border-gray-300 whitespace-nowrap">
                                    Event Name
                                </TableHead>
                                <TableHead className="px-4 py-2 font-medium text-gray-500  border border-gray-300 whitespace-nowrap">
                                    Prize
                                </TableHead>
                                <TableHead className="px-4 py-2 font-medium text-gray-500  border border-gray-300 whitespace-nowrap">
                                    Time
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((transaction, index) => (
                                <TableRow
                                    key={transaction.id}
                                    className={
                                        index % 2 === 0
                                            ? "bg-white hover:bg-gray-100"
                                            : "bg-[#f8f8f8] hover:bg-gray-100"
                                    }
                                >
                                    <TableCell className="px-4 py-2 border border-gray-300">
                                        {transaction.type}
                                    </TableCell>
                                    <TableCell className="px-4 py-2 border border-gray-300">
                                        {transaction.amount}
                                    </TableCell>
                                    <TableCell className="px-4 py-2 border border-gray-300">
                                        {transaction.eventName !== null
                                            ? transaction.eventName
                                            : "No event associated with this transaction"}
                                    </TableCell>
                                    <TableCell className="px-4 py-2 border border-gray-300">
                                        {transaction.prizeName !== null
                                            ? transaction.prizeName
                                            : "No prize associated with this transaction"}
                                    </TableCell>
                                    <TableCell className="px-4 py-2 border border-gray-300">
                                        {transaction.time.toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
