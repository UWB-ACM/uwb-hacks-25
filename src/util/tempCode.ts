import { buildKey, redis } from "@/src/util/redis";

//create a code
function createCode(digits : number) {

    let code = ""

    for(let i = 0; i < digits; i++) {

        //create digits in between 0 and 9
        code += Math.floor(Math.random() * (10)).toString(); 
    }
    return code
}

/**
 * 
 * @param duration The duration the code remains valid for in seconds 
 * 
 * Creates a code and adds it to the database. It also returns the code for future deletion
 */
export async function addCode(duration : number) {
    const newCode = createCode(6);
    const currentTime = new Date().toISOString();
    const key = buildKey(newCode, currentTime);

    await redis.set(key, "Active", { ex: duration })

    return [newCode, currentTime]
} 

/**
 * 
 * @param code The randomly generated code for the user
 * 
 *  The timestamp and code are added together to create a unique key to avoid collisions 
 */
export async function removeCode(code : string) {
    await redis.del(code)
}