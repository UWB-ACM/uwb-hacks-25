import React from "react";
import { FaGift } from "react-icons/fa6";
import DashboardButton from "@/src/components/dashboards/DashboardButton";

function StaffActions() {
    // TODO: Make these actual actions.
    return (
        <>
            <DashboardButton href="/dashboard/create-check-in-code">
                <FaGift className="h-[30px] w-[30px]" />
                Create Check-In Code
            </DashboardButton>
        </>
    );
}

export default StaffActions;
