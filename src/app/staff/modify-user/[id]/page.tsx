import React from "react";
import Link from "next/link";
import { getSession } from "@/src/util/session";
import {
    getBalanceForUser,
    getTransactionsForUser,
} from "@/src/util/db/transaction";
import { Metadata } from "next";
import { ensureStaffPermission, extractStaffUserData } from "@/src/util/staff";

export const metadata: Metadata = {
    title: "Modify User | UWB Hacks 25",
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const session = await getSession();
    await ensureStaffPermission(session);

    const user = await extractStaffUserData((await params).id);

    const balance = await getBalanceForUser(user.id);
    const history = await getTransactionsForUser(user.id);

    // returning the card with user information
    return (
        // centering all the content on the screen
        <div className="h-screen grid place-content-center">
            {/* the actual card with all the user data */}
            <div className="h-[80vh] w-[90vw] md:w-[60vw] lg:w-[40vw] bg-neutral-100 p-5 flex flex-col justify-between rounded-md border-2 border-black shadow-lg">
                {/* main content of the user, separate from the exit button */}
                <div>
                    {/* displaying name and email of user, will have to change once database integrated*/}
                    <div className="py-2">
                        {user.name} | {user.email}
                    </div>
                    {/* displaying number of hackeroons user has */}
                    <div className="py-2">
                        Hackeroons{" "}
                        <span className="text-2xl font-bold">{balance}</span>
                    </div>
                    {/* displaying user transactions */}
                    <div className="py-2">
                        Transactions
                        <ul>
                            {/* iterating through user's transaction list */}
                            {history.map((transaction) => (
                                <li className="mt-4" key={transaction.id}>
                                    [{transaction.type}] H${transaction.amount}{" "}
                                    {transaction.event} {transaction.prize}{" "}
                                    {transaction.time.toString()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* exit button that returns user back to staff dashboard */}
                <Link
                    className="py-3 rounded-lg text-center bg-red-500 text-white"
                    href={`/staff/user/${user.id}`}
                >
                    Exit
                </Link>
            </div>
        </div>
    );
}
