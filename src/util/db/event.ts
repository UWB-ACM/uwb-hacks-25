import { Event } from "@/src/util/dataTypes";
import sql from "@/src/util/database";

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