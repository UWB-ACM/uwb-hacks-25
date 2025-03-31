"use server";
import "server-only";

import {
    hasPermissions,
    PermissionLevel,
    Event,
} from "@/src/util/dataTypes";
import { getSession } from "@/src/util/session";
import { getPermissionLevel } from "@/src/util/db/user";
import { createEvent, getEventById, updateEvent } from "@/src/util/db/event";

export async function actionCreateEvent(
    name: string,
    description: string,
    start: Date,
    end: Date | null,
): Promise<Event | null> {
    const session = await getSession();
    if (!session.user?.id) return null;

    const permission = await getPermissionLevel(session.user.id);
    if (permission == null || !hasPermissions(permission, { has: PermissionLevel.Admin})) {
        return null;
    }

    return await createEvent(name, description, start, end);
}


// TODOOOOOOOOOOOOOOOOOOOOOO
export async function fetchEventById(id: number) {
    return await getEventById(id);
}

export async function actionUpdateEvent(
    id: number,
    name: string,
    description: string,
    start: Date,
    end: Date | null,
) {
    const session = await getSession();
    if (!session.user?.id) return null;

    const permission = await getPermissionLevel(session.user.id);
    if (permission == null || !hasPermissions(permission, { has: PermissionLevel.Admin })) {
        return null;
    }

    return await updateEvent(id, name, description, start, end);
}