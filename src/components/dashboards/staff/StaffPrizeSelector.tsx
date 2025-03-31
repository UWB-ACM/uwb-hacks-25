"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Prize } from "@/src/util/dataTypes";
import Selector from "@/src/components/dashboards/staff/Selector";

type StaffPrizeSelector = {
    prizes: Promise<Prize[]>;
};

function StaffPrizeSelector({ prizes }: StaffPrizeSelector) {
    return (
        <Selector
            items={prizes}
            buttonName="Select Prize"
            id={(prize) => prize.id}
            title={(prize) => prize.name}
            description={(prize) => prize.description || "Prize description"}
            onClick={() => {
                console.log("clicked");
            }}
        />
    );
}

export default StaffPrizeSelector;
