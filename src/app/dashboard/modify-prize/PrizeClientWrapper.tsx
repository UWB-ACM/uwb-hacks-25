"use client";

import React, { useState } from "react";
import StaffPrizeSelector from "@/src/components/dashboards/staff/StaffPrizeSelector";
import ModifyPrizeForm from "@/src/components/dashboards/staff/ModifyPrizeForm";
import { Prize } from "@/src/util/dataTypes";

type PrizeClientWrapperProps = {
    prizes: Promise<Prize[]>;
};

export default function PrizeClientWrapper({
    prizes,
}: PrizeClientWrapperProps) {
    const [prizeId, setPrizeId] = useState<number | null>(null);

    return (
        <>
            {prizeId === null && (
                <div className="w-full flex justify-center">
                    <StaffPrizeSelector
                        prizes={prizes}
                        setPrizeId={(id) => setPrizeId(id)}
                    />
                </div>
            )}
            <ModifyPrizeForm prizeId={prizeId} setPrizeId={setPrizeId} />
        </>
    );
}
