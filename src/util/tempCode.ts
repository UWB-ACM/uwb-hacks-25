import { redis } from "@/src/util/redis";
import { CheckInInfo } from "./dataTypes";

export const CHECK_IN_CODE_LENGTH = 6;
const PREFIX = "checkin:";

//create a code
function createCode(digits: number) {
    let code = "";

    for (let i = 0; i < digits; i++) {
        //create digits in between 0 and 9
        code += Math.floor(Math.random() * 10).toString();
    }
    return code;
}

/**
 * Creates a code and adds it to the database.
 * The code that was generated is returned.
 * @param data - is the data associated with the code to save in the database.
 */
export async function addCode(data: CheckInInfo) {
    let code = createCode(CHECK_IN_CODE_LENGTH);

    // Keep generating a new code if there is a duplicate in redis.
    // This uses an arbitrary number for the maximum number of tries
    // to avoid an infinite loop.
    for (let i = 0; i < 1000; i++) {
        const res = await redis.set(PREFIX + code, JSON.stringify(data), {
            ex: data.duration,
            // If the code already exists, don't override it.
            nx: true,
        });

        if (res === "OK") {
            // Successfully set.
            break;
        } else {
            // Try again.
            code = createCode(CHECK_IN_CODE_LENGTH);
        }
    }

    return code;
}

/**
 *
 * @param code The randomly generated code for the user
 *
 */
export async function removeCode(code: string) {
    await redis.del(PREFIX + code);
}

/**
 * Retrieves the data associated with the given check-in code.
 * @param code The randomly generated code for the user
 * @returns The data, if it exists, or else null.
 */
export async function getCodeData(code: string): Promise<CheckInInfo | null> {
    return await redis.get(PREFIX + code);
}
