"use client"

import React from "react";

function CheckInInput() {
    
    function checkIn() {
        
    }

    return (
        <div className="flex">
            <input type="text" className="w-20 h-10 " name="" id="" onPaste={(e) => {e.preventDefault()}}/>
            <button className="w-20 h-10 bg-blue-500 text-white">Check In</button>
        </div>
    );
}

export default CheckInInput;
