"use server";
import "server-only";

import { hasPermissions, PermissionLevel, Prize } from "@/src/util/dataTypes";
import { getSession } from "@/src/util/session";
import { getPermissionLevel } from "@/src/util/db/user";
import { createPrize, updatePrize, getPrizeById } from "@/src/util/db/prize";

export async function actionCreatePrize(
    name: string,
    description: string,
    initial_stock: number,
    price: number,
    imageName: string,
): Promise<Prize | null> {
    const session = await getSession();
    if (!session.user?.id) return null;

    const permission = await getPermissionLevel(session.user.id);
    if (
        permission == null ||
        !hasPermissions(permission, { has: PermissionLevel.Admin })
    ) {
        return null;
    }

    return await createPrize(
        name,
        description,
        initial_stock,
        price,
        imageName,
    );
}

export async function fetchPrizeById(id: number) {
    return await getPrizeById(id);
}

export async function actionUpdatePrize(
    id: number,
    name: string,
    description: string,
    initialStock: number,
    price: number,
    imageName: string,
) {
    const session = await getSession();
    if (!session.user?.id) return null;

    const permission = await getPermissionLevel(session.user.id);
    if (
        permission == null ||
        !hasPermissions(permission, { has: PermissionLevel.Admin })
    ) {
        return null;
    }

    return await updatePrize(
        id,
        name,
        description,
        initialStock,
        price,
        imageName,
    );
}
