import { hasPermissions, PermissionLevel, User } from "@/src/util/dataTypes";
import { Session } from "@/src/util/session";
import { getPermissionLevel, getUserFromID } from "@/src/util/db/user";
import { redirect } from "next/navigation";

/**
 * This validates that the requesting user has Staff level permissions.
 * @param session - is the session of the requester.
 */
export async function ensureStaffPermission(
    session: Session,
): Promise<void | never> {
    if (!session.user?.id) return redirect("/");

    // Ensure that the user has permission.
    const permission = await getPermissionLevel(session.user.id);
    if (
        permission == null ||
        !hasPermissions(permission, { has: PermissionLevel.Staff })
    ) {
        return redirect("/");
    }
}

/**
 * This does the following:
 * - Validates that the user parameter is valid.
 * - Extracts the user data for the user in the user parameter and returns it.
 * @param userID - is the ID of the user being requested (not the requester).
 */
export async function extractStaffUserData(
    userID: string,
): Promise<User | never> {
    const id = parseInt(userID);

    if (isNaN(id)) {
        return redirect("/staff");
    }

    const requestedUser = await getUserFromID(id);
    if (requestedUser == null) {
        return redirect("/staff");
    }

    return requestedUser;
}
