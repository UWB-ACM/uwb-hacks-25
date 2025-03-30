import { redis } from "@/src/util/redis";
import { CheckInInfo } from "./dataTypes";

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
 * @param createdBy The code creator's user id 
 * 
 * Creates a code and adds it to the database. It also returns the code for future deletion
 */
export async function addCode(duration : number, body : CheckInInfo) {
   
    let code = createCode(6);
    
    // Keep generating a new code if there is a duplicate in redis
    let exists = await codeExists(code);
    

    while(exists) {
        code = createCode(6)
        exists = await codeExists(code);
    } 
    
    await redis.set(code, JSON.stringify(body), { ex: duration })

    return code
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

/**
 * 
 * @param code The randomly generated code for the user
 * @returns true if the code is valid, false otherwise
 */
export async function codeExists(code : string) {
    const res = await redis.exists(code);
    return res == 1
}