"use client";
import { Transaction } from "@/src/util/dataTypes";
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/src/components/ui/table";

type TransactionTableProps = {
    transactions: Transaction[];
};

const TransactionTable = ({ transactions }: TransactionTableProps) => {
    const [showMore, setShowMore] = useState(false);
    const testTransactions_MoreThanThreeTransactions = [
        {
            id: 14,
            type: 1,
            amount: 125,
            eventName: "test event 1",
            prizeName: "test prize 1",
            time: "4/4/2025, 2:00:00 PM",
        },
        {
            id: 15,
            type: 2,
            amount: 15,
            eventName: "test event 2",
            prizeName: "test prize 2",
            time: "4/4/2025, 4:00:00 PM",
        },
        {
            id: 16,
            type: 1,
            amount: 25,
            eventName: "test event 3",
            prizeName: "test prize 3",
            time: "4/4/2025, 5:00:00 PM",
        },
        {
            id: 17,
            type: 2,
            amount: 12,
            eventName: "test event 4",
            prizeName: "test prize 4",
            time: "4/4/2025, 6:00:00 PM",
        },
        {
            id: 18,
            type: 1,
            amount: 5,
            eventName: "test event 5",
            prizeName: "test prize 5",
            time: "4/4/2025, 8:00:00 PM",
        },
    ];

    return (
        <div className="rounded-xl border border-gray-300 overflow-hidden shadow-sm mt-[2rem]">
            <h3 className="bg-white p-3 font-bold"> Transaction History </h3>
            <div className="overflow-x-auto">
                <Table className="w-full bg-white">
                    {transactions.length > 3 && (
                        <TableCaption className="mt-0 p-2 text-gray-600 bg-gray-100 border-t border-gray-300">
                            <button
                                className="text-black underline hover:scale-105 duration-150"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {" "}
                                {showMore ? "Show Less" : "Show More"}{" "}
                            </button>
                        </TableCaption>
                    )}
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
                        {/* Greater than three transactions, cut off after 3 transactions shown */}
                        {transactions
                            .slice(0, showMore ? transactions.length : 3)
                            .map((transaction, index) => (
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
    );
};

export default TransactionTable;
