import { Event, TransactionType } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets every event.
 */
export async function getEvents(): Promise<Event[]> {
    const data =
        await sql`SELECT id, name, description, start, "end", location, attendance_amount FROM events`;

    console.log(data);
    return data.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        start: row.start,
        end: row.end,
        location: row.location,
        attendanceAmount: row.event_attendance,
    }));
}

/**
 * Gets event through passed in ID
 */
export async function getEventById(id: number): Promise<Event | null> {
    const data =
        await sql`SELECT id, name, description, start, "end", location, attendance_amount FROM events WHERE id=${id}`;

    // if there's no event with given id, return null
    if (data.length === 0) return null;

    // otherwise, return event information
    return {
        id: data[0].id,
        name: data[0].name,
        description: data[0].description,
        start: data[0].start,
        end: data[0].end,
        location: data[0].location,
        attendanceAmount: data[0].attendance_amount,
    };
}

// add comments later
// force start and end date to be filled out on frontend side
export async function createEvent(
    name: string,
    description: string,
    start: Date,
    end: Date | null,
    location: string | null,
    attendanceAmount: number,
): Promise<Event | null> {
    // Simply insert all required data into events table in database
    // All data validation will likely be done on frontend
    // i.e. non-null name and description,
    // and valid start and end times (start time happens before end time)

    const data =
        await sql`INSERT INTO events ("name", "description", "start", "end", "location", "attendance_amount") VALUES (${name}, ${description}, ${start}, ${end}, ${location}, ${attendanceAmount}) RETURNING id`;

    if (data.length === 0) return null;
    return {
        id: data[0].id,
        name,
        description,
        start,
        end,
        location,
        attendanceAmount,
    };
}

export async function updateEvent(
    id: number,
    name: string,
    description: string,
    start: Date,
    end: Date | null,
    location: string | null,
    attendanceAmount: number,
) {
    // This will retroactively modify all event checkin transactions
    // to match the new amount, in order to ensure consistency.

    await sql.begin((sql) => [
        // This needs to be locked for concurrency, to prevent
        // check-ins from occurring in parallel and having an
        // outdated amount.
        sql`SELECT 1 FROM events WHERE id=${id} FOR UPDATE;`,
        sql`UPDATE transactions SET amount=${attendanceAmount} WHERE type=${TransactionType.EventAttendance} AND event=${id};`,
        sql`UPDATE events SET name=${name}, description=${description}, start=${start}, "end"=${end}, location=${location}, attendance_amount=${attendanceAmount} WHERE id=${id}`,
    ]);

    // assume updated
    return;
}
