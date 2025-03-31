import React from "react";
import StaffPrizeSelector from "@/src/components/dashboards/staff/StaffPrizeSelector";
import { getPrizes } from "@/src/util/db/prize";
import ModifyPrizeForm from "@/src/components/dashboards/staff/ModifyPrizeForm";
// import { Prize } from "@/src/util/dataTypes";

export default function ModifyPrizePage() {
    const prizeList = getPrizes();

    return (
        // Place selector here
        <div className="w-screen min-h-screen">
            <div className="w-full flex justify-center">
                <StaffPrizeSelector prizes={prizeList} />
            </div>
            <ModifyPrizeForm />
        </div>
    );
}
