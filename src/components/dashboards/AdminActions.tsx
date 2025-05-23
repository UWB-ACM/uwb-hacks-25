import React from "react";
import { FaGift } from "react-icons/fa6";
import DashboardButton from "@/src/components/dashboards/DashboardButton";

function AdminActions() {
    return (
        <>
            <DashboardButton href="/dashboard/create-event">
                <FaGift className="h-[30px] w-[30px]" />
                Create Event
            </DashboardButton>
            <DashboardButton href="/dashboard/modify-event">
                <FaGift className="h-[30px] w-[30px]" />
                Modify Event
            </DashboardButton>
            <DashboardButton href="/dashboard/create-prize">
                <FaGift className="h-[30px] w-[30px]" />
                Create Prize
            </DashboardButton>
            <DashboardButton href="/dashboard/modify-prize">
                <FaGift className="h-[30px] w-[30px]" />
                Modify Prize
            </DashboardButton>
        </>
    );
}

export default AdminActions;
