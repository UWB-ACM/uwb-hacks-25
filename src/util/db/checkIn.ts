import sql from "@/src/util/database";
import { TransactionType } from "@/src/util/dataTypes";

/**
 * Checks a user in to an event.
 * This also gives them the required hackeroons.
 * This function is idempotent (i.e., it won't check in
 * users multiple times).
 * @param user - is the ID of the user to check in.
 * @param event - is the event to check the user in to.
 * @param authorized_by - is the staff member who authorized this check-in
 *                        or created the check-in code (if they exist).
 */
export async function checkInUser(
    user: number,
    event: number,
    authorized_by: number | null,
) {
    try {
        await sql.begin((sql) => [
            // This needs to be locked for concurrency, to prevent
            // check-ins from occurring in parallel with event edits and having an
            // outdated amount.
            // We can use a shared lock here, since parallel check-ins
            // are allowed.
            sql`SELECT 1 FROM events WHERE id=${event} FOR SHARE;`,
            // Attendance has a unique constraint that prevents multiple check-ins.
            sql`INSERT INTO attendance ("user", event) VALUES (${user}, ${event});`,
            // events.attendance_amount is constrained to be >= 0, therefore, we don't
            // need to verify that this will keep the user's balance positive.
            sql`INSERT INTO transactions ("user", type, amount, authorized_by, event) VALUES (${user}, ${TransactionType.EventAttendance}, (SELECT attendance_amount FROM events WHERE id=${event}), ${authorized_by}, ${event});`,
        ]);
    } catch (e) {
        // If the error is due to the unique constraint on attendance failing,
        // then we can silently ignore it, since this function is meant to be idempotent.
        const ERROR_UNIQUE_VIOLATION = "23505";
        if (
            e &&
            typeof e === "object" &&
            "code" in e &&
            e["code"] === ERROR_UNIQUE_VIOLATION &&
            "table_name" in e &&
            e["table_name"] === "attendance" &&
            "constraint_name" in e &&
            e["constraint_name"] === "attendance_pk"
        ) {
            return;
        }

        throw e;
    }
}
