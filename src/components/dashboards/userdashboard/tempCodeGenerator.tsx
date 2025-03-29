"use client"
import React from "react";
import { useState } from "react";   

export default function TempCodeGenerator({id}: {id: number}) {

    const [duration, setDuration] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(parseInt(e.target.value));
    }    

    //create a code
    function createCode(digits) {

        let code = ""

        for(let i = 0; i < digits; i++) {

            //create digits in between 0 and 9
            code += Math.floor(Math.random() * (10)).toString(); 
        }
        return code
    }

    //send a request to the database to creaete a record
    function onClick() {
        
    }


    return <div>
        <input type="number" value={duration} onChange={handleChange} />
        <button>create</button>
    </div>

}
