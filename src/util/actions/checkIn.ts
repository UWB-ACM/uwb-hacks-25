"use server";

import { getSession } from "@/src/util/session";
import { addCode, getCodeData, removeCode } from "@/src/util/tempCode";
import { checkInUser } from "@/src/util/db/checkIn";
import { ensureStaffPermission } from "@/src/util/staff";
import { redirect } from "next/navigation";
import { getEventById } from "@/src/util/db/event";
import { Event } from "@/src/util/dataTypes";

/**
 * Validates that the check-in code is valid, and, if it is,
 * checks the currently logged-in user in to the event.
 * On success, this returns the event that the
 * user checked in to.
 * If the user already checked in to the event, then
 * alreadyCheckin is true.
 * Otherwise, null.
 * @param code - is the code to check-in with.
 */
export async function actionValidateCheckin(
    code: string,
): Promise<Event | { alreadyCheckin: true } | null> {
    const session = await getSession();
    if (!session.user?.id) return redirect("/");

    /**
     *  There is a small chance a user will guess another 6 digit code that exists on the redis database
     *  Although only a single event happens at a time and only 1 staff member will make a checkin code at once.
     *  The chances of guessing the code is 1 / 1,000,000. We should be good.
     */
    const codeData = await getCodeData(code);
    if (codeData == null || codeData.event == null) {
        return null;
    }

    const eventData = getEventById(codeData.event);

    // This is idempotent and won't check in users multiple times.
    const success = await checkInUser(
        session.user.id,
        codeData.event,
        codeData.authorized_by,
    );

    if (!success) {
        return null;
    }

    if (typeof success === "object" && "alreadyCheckin" in success) {
        return { alreadyCheckin: true };
    }

    // In theory, eventData could return null even if checkInUser
    // succeeds, but that can only really happen if event deletion
    // races with check-in, and even if it does, the only consequence
    // is that we say it failed when it didn't.
    return await eventData;
}

/**
 * Invalidates the given code.
 * This requires staff privileges, and staff
 * members may invalidate any code, not just
 * their own.
 * @param code - is the code to invalidate.
 */
export async function actionInvalidateCode(code: string): Promise<void> {
    const session = await getSession();
    await ensureStaffPermission(session);

    await removeCode(code);
}

/**
 * Generates a new check-in code from the given data.
 * This requires staff privileges.
 * @param event - is the ID of the event to generate the code for.
 * @param duration - is the duration of the code (in seconds).
 */
export async function actionGenerateCheckinCode(
    event: number,
    duration: number,
): Promise<string | null> {
    const session = await getSession();
    await ensureStaffPermission(session);

    return await addCode({
        event,
        duration,
        // ID must exist due to ensureStaffPermission.
        authorized_by: session.user!.id,
    });
}
