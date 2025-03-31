import React from "react";
import { getPrizes } from "@/src/util/db/prize";
import PrizeClientWrapper from "./PrizeClientWrapper";

export default function ModifyPrizePage() {
    const prizes = getPrizes();

    return (
        <div className="w-screen min-h-screen">
            <PrizeClientWrapper prizes={prizes} />
        </div>
    );
}
