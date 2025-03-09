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
import { createTransaction } from "@/src/util/db/transaction";

/**
 * Creates a transaction authorized by the
 * caller of this function.
 *
 * @see createTransaction
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

    // Ensure that the user has permisison.
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
