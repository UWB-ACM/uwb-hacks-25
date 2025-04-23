import "server-only";

import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL as string, {
    // This doesn't work with Supabase.
    prepare: false,
});

export default sql;
