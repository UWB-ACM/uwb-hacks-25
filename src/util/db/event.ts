import { Event } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

/**
 * Gets every event.
 */
export async function getEvents(): Promise<Event[]> {
    const data =
        await sql`SELECT id, name, description, start, "end" FROM events`;

    console.log(data);
    return data.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        start: row.start,
        end: row.end,
    }));
}

/**
 * Gets event through passed in ID
 */
export async function getEventById(id: number): Promise<Event | null> {
    const data =
        await sql`SELECT id, name, description, start, "end" FROM events WHERE id=${id}`;

    // if there's no event with given id, return null
    if (data.length === 0) return null;

    // otherwise, return event information
    return {
        id: data[0].id,
        name: data[0].name,
        description: data[0].description,
        start: data[0].start,
        end: data[0].end,
    };
}

// add comments later
// force start and end date to be filled out on frontend side
export async function createEvent(
    name: string,
    description: string,
    start: Date,
    end: Date | null,
): Promise<Event | null> {
    // Simply insert all required data into events table in database
    // All data validation will likely be done on frontend
    // i.e. non-null name and description,
    // and valid start and end times (start time happens before end time)

    const data =
        await sql`INSERT INTO events ("name", "description", "start", "end") VALUES (${name}, ${description}, ${start}, ${end}) RETURNING id`;

    if (data.length === 0) return null;
    return {
        id: data[0].id,
        name,
        description,
        start,
        end,
    };
}

export async function updateEvent(
    id: number,
    name: string,
    description: string,
    start: Date,
    end: Date | null,
) {
    // update event
    const data =
        await sql`UPDATE events SET name=${name}, description=${description}, start=${start}, "end"=${end} WHERE id=${id}`;

    // doing this to satisfy eslint
    console.log("updateEventData:", data);

    // assume updated
    return;
}
