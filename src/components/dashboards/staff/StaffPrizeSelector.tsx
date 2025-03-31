"use client";

import React, { Dispatch, SetStateAction } from "react";
import Selector from "@/src/components/dashboards/staff/Selector";
import { Prize } from "@/src/util/dataTypes";

type StaffPrizeSelectorProps = {
    prizes: Promise<Prize[]>;
    setPrizeId: Dispatch<SetStateAction<number | null>>;
};

export default function StaffPrizeSelector({
    prizes,
    setPrizeId,
}: StaffPrizeSelectorProps) {
    return (
        <Selector
            items={prizes}
            buttonName="Select Prize"
            id={(prize) => prize.id}
            title={(prize) => prize.name}
            description={(prize) => prize.description || "Prize description"}
            onClick={(prize) => {
                setPrizeId(prize.id);
            }}
        />
    );
}
