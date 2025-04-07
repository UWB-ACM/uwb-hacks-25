"use client";

import {
    hasPermissions,
    PermissionLevel,
    Transaction,
    User,
} from "@/src/util/dataTypes";
import { Session, SessionUser } from "@/src/util/session";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { actionSetTransactionReverted } from "@/src/util/actions/transactions";

export function ModifyUserPage({
    user,
    balance,
    history,
    permission,
    session,
}: {
    user: User;
    balance: number;
    history: Transaction[];
    permission: PermissionLevel;
    session: Session;
}) {
    const [curHistory, setCurHistory] = useState(history);
    const [curBalance, setCurBalance] = useState(balance);

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
                        <span className="text-2xl font-bold">{curBalance}</span>
                    </div>
                    {/* displaying user transactions */}
                    <div className="py-2">
                        Transactions
                        <TransactionList
                            history={curHistory}
                            setHistory={setCurHistory}
                            setBalance={setCurBalance}
                            permission={permission}
                            sessionUser={session.user!}
                            balance={curBalance}
                        />
                    </div>
                </div>
                {/* exit button that returns user back to staff dashboard */}
                <Link
                    className="py-3 rounded-lg text-center bg-red-500 text-white"
                    href={`/dashboard/${user.id}`}
                >
                    Exit
                </Link>
            </div>
        </div>
    );
}

function TransactionList({
    history,
    setHistory,
    setBalance,
    sessionUser,
    permission,
    balance,
}: {
    history: Transaction[];
    setHistory: Dispatch<SetStateAction<Transaction[]>>;
    setBalance: Dispatch<SetStateAction<number>>;
    sessionUser: SessionUser;
    permission: PermissionLevel;
    balance: number;
}) {
    return (
        <ul>
            {/* iterating through user's transaction list */}
            {history.map((transaction) => (
                <li className="mt-4" key={transaction.id}>
                    <TransactionItem
                        transaction={transaction}
                        permission={permission}
                        sessionUser={sessionUser}
                        balance={balance}
                        revert={(reverted) => {
                            // Set the given transaction to reverted.
                            setHistory((history) =>
                                history.map((t2) => {
                                    if (t2.id === transaction.id) {
                                        return {
                                            ...t2,
                                            reverted,
                                        };
                                    }

                                    return t2;
                                }),
                            );

                            // Remove the cost of the transaction from the balance.
                            setBalance(
                                (balance) =>
                                    balance +
                                    // Unreverting adds the amount back, not
                                    // removes it.
                                    (reverted ? -1 : 1) * transaction.amount,
                            );
                        }}
                    />
                </li>
            ))}
        </ul>
    );
}

function TransactionItem({
    sessionUser,
    permission,
    transaction,
    balance,
    revert,
}: {
    sessionUser: SessionUser;
    permission: PermissionLevel;
    transaction: Transaction;
    balance: number;
    revert: (reverted: boolean) => void;
}) {
    const isAdmin = hasPermissions(permission, { has: PermissionLevel.Admin });

    const canRevert = isAdmin || transaction.authorized_by === sessionUser.id;
    // If the transaction is already reverted, then unreverting adds
    // the amount back, not subtracts it.
    const canRevertWithBalance =
        balance + (transaction.reverted ? 1 : -1) * transaction.amount >= 0;

    let buttonColor;
    let buttonText;

    if (canRevertWithBalance) {
        if (transaction.reverted) {
            // Unrevert.
            buttonColor = "bg-blue-500";
            buttonText = "Un-revert";
        } else {
            // Revert.
            buttonColor = "bg-red-500";
            buttonText = "Revert";
        }
    } else {
        // Insufficient balance.
        if (transaction.reverted) {
            // Unrevert.
            buttonColor = "bg-blue-800";
            buttonText = "Cannot Un-revert";
        } else {
            // Revert.
            buttonColor = "bg-red-800";
            buttonText = "Cannot Revert";
        }
    }

    return (
        <div className="flex flex-row justify-between">
            <p className={transaction.reverted ? "line-through" : ""}>
                [{transaction.type}] H${transaction.amount} {transaction.event}{" "}
                {transaction.prize} {transaction.time.toString()}
            </p>
            <div>
                {canRevert && (
                    <button
                        className={
                            buttonColor +
                            " border-[1px] border-black rounded-xl p-2"
                        }
                        onClick={async () => {
                            if (!canRevert || !canRevertWithBalance) return;

                            const newRevertedStatus = !transaction.reverted;

                            if (
                                await actionSetTransactionReverted(
                                    transaction.id,
                                    newRevertedStatus,
                                )
                            ) {
                                revert(newRevertedStatus);
                            }
                        }}
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
}
