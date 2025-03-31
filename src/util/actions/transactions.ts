"use server";
import "server-only";

import {
    hasPermissions,
    PermissionLevel,
    Transaction,
    TransactionType,
} from "@/src/util/dataTypes";
import { getSession } from "@/src/util/session";
import { getPermissionLevel } from "@/src/util/db/user";
import {
    createTransaction,
    setTransactionReverted,
    setTransactionRevertedIfIssuer,
} from "@/src/util/db/transaction";

/**
 * Creates a transaction authorized by the
 * caller of this function.
 *
 * @param user - is the ID of the user who this transaction is on.
 * @param type - is the type of the transaction.
 * @param amount - is the amount (positive or negative) that this transaction represents.
 * @param event - is the event that this transaction is associated with (if it exists).
 * @param prize - is the prize that this transaction is associated with (if it exists).
 */
export async function actionCreateTransaction(
    user: number,
    type: TransactionType,
    amount: number,
    event: number | null,
    prize: number | null,
): Promise<Transaction | null> {
    const session = await getSession();
    if (!session.user?.id) return null;

    // Ensure that the user has permission.
    const permission = await getPermissionLevel(session.user.id);
    if (
        permission == null ||
        !hasPermissions(permission, { has: PermissionLevel.Staff })
    ) {
        return null;
    }

    return await createTransaction(
        user,
        type,
        amount,
        session.user.id,
        event,
        prize,
    );
}

/**
 * Sets the reverted status of the given transaction.
 * This handles permission differences between staff and admins.
 * @param id - is the ID of the transaction to modify.
 * @param reverted - should the transaction be reverted.
 * @returns whether the transaction was reverted.
 */
export async function actionSetTransactionReverted(
    id: number,
    reverted: boolean,
): Promise<boolean> {
    const session = await getSession();
    if (!session.user?.id) return false;

    // Ensure that the user has permission.
    const permission = await getPermissionLevel(session.user.id);
    if (
        permission == null ||
        !hasPermissions(permission, { has: PermissionLevel.Staff })
    ) {
        return false;
    }

    // Admins can revert all transactions, whereas
    // staff can only revert their own.
    if (hasPermissions(permission, { has: PermissionLevel.Admin })) {
        return await setTransactionReverted(id, reverted);
    } else {
        return await setTransactionRevertedIfIssuer(
            id,
            session.user.id,
            reverted,
        );
    }
}
