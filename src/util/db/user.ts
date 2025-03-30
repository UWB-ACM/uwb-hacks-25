import "server-only";

import { PermissionLevel, User } from "@/src/util/dataTypes";
import sql from "@/src/util/database";
import crypto from "node:crypto";

/**
 * Creates a user, returning the resulting user record.
 * @param googleId - is the ID of the user's Google account.
 * @param name - is the user's name.
 * @param email - is the user's email address.
 * @param picture - is a URL to the user's profile picture (if it exists).
 */
export async function createUser(
    googleId: string,
    name: string,
    email: string,
    picture: string | null,
): Promise<User | null> {
    const data =
        await sql`INSERT INTO users (google_id, name, email, picture) VALUES (${googleId}, ${name}, ${email}, ${picture}) RETURNING id;`;

    if (data.length === 0) {
        return null;
    }

    return {
        id: data[0].id,
        googleId,
        name,
        email,
        picture: picture || (await gravatarFromEmail(email)),
        // The user has no balance since we just made them.
        balance: 0,
    };
}

/**
 * Gets a user from their Google ID.
 * @param googleId - is the ID of the user's Google account.
 */
export async function getUserFromGoogle(
    googleId: string,
): Promise<User | null> {
    const data =
        await sql`SELECT id, name, email, picture, balance FROM users LEFT JOIN balances ON balances.user=users.id WHERE google_id=${googleId};`;

    if (data.length === 0) {
        return null;
    }

    return {
        id: data[0].id,
        googleId,
        name: data[0].name,
        email: data[0].email,
        picture: data[0].picture || (await gravatarFromEmail(data[0].email)),
        // Balance will be null if the user
        // has no transactions.
        balance: data[0].balance || 0,
    };
}

/**
 * Gets a user from their ID.
 * @param id - is the ID of the user's account.
 */
export async function getUserFromID(id: number): Promise<User | null> {
    const data =
        await sql`SELECT google_id, name, email, picture, balance FROM users LEFT JOIN balances ON balances.user=users.id WHERE id=${id};`;

    if (data.length === 0) {
        return null;
    }

    return {
        id,
        googleId: data[0].google_id,
        name: data[0].name,
        email: data[0].email,
        picture: data[0].picture || (await gravatarFromEmail(data[0].email)),
        // Balance will be null if the user
        // has no transactions.
        balance: data[0].balance || 0,
    };
}

/**
 * Retrieves the list of every user from the database.
 */
export async function getAllUsers(): Promise<User[]> {
    const data =
        await sql`SELECT id, google_id, name, email, picture, balance FROM users LEFT JOIN balances ON balances.user=users.id;`;

    return await Promise.all(
        data.map(async (entry) => ({
            id: entry.id,
            googleId: entry.google_id,
            name: entry.name,
            email: entry.email,
            picture: entry.picture || (await gravatarFromEmail(entry.email)),
            // Balance will be null if the user
            // has no transactions.
            balance: entry.balance || 0,
        })),
    );
}

/**
 * Gets the permission level for a user, or null
 * if the user doesn't exist.
 * @param user - is the user to look for.
 */
export async function getPermissionLevel(
    user: number,
): Promise<PermissionLevel | null> {
    const data = await sql`SELECT permission FROM users WHERE id=${user};`;

    if (data.length === 0) return null;
    return data[0].permission;
}

/**
 * Generates a Gravatar URL from the given email address.
 * @param email - is the email address to generate the URL from.
 */
async function gravatarFromEmail(email: string): Promise<string> {
    return (
        "https://www.gravatar.com/avatar/" +
        crypto
            .createHash("sha256")
            .update(email.trim().toLowerCase())
            .digest("hex")
    );
}
