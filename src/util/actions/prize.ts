"use server";
import "server-only";

import {
    hasPermissions,
    PermissionLevel,
    Prize,
} from "@/src/util/dataTypes";
import { getSession } from "@/src/util/session";
import { getPermissionLevel } from "@/src/util/db/user";
import { createPrize, updatePrize } from "@/src/util/db/prize";

export async function actionCreatePrize(
    name: string,
    description: string,
    initial_stock: number,
    price: number,
): Promise<Prize | null> {
    const session = await getSession();
    if (!session.user?.id) return null;

    const permission = await getPermissionLevel(session.user.id);
    if (permission == null || !hasPermissions(permission, { has: PermissionLevel.Admin })) {
        return null;
    }

    return await createPrize(name, description, initial_stock, price);
}

export async function actionUpdatePrize(
    name: string,
    description: string,
    initial_stock: number,
    price: number,
) {
    const session = await getSession();
    if (!session.user?.id) return null;

    const permission = await getPermissionLevel(session.user.id);
    if (permission == null || !hasPermissions(permission, { has: PermissionLevel.Admin })) {
        return null;
    }

    return await updatePrize(name, description, initial_stock, price);
}