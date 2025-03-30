import React from "react";
import { FaGift } from "react-icons/fa6";
import DashboardButton from "@/src/components/dashboards/DashboardButton";

function AdminActions() {
    // TODO: Make these actual actions.
    return (
        <>
            <DashboardButton href="#">
                <FaGift className="h-[30px] w-[30px]" />
                View Transactions
            </DashboardButton>
            <DashboardButton href="/dashboard/create-event">
                <FaGift className="h-[30px] w-[30px]" />
                Create Event
            </DashboardButton>
            <DashboardButton href="#">
                <FaGift className="h-[30px] w-[30px]" />
                Modify Event
            </DashboardButton>
            <DashboardButton href="/dashboard/create-prize">
                <FaGift className="h-[30px] w-[30px]" />
                Create Prize
            </DashboardButton>
            <DashboardButton href="#">
                <FaGift className="h-[30px] w-[30px]" />
                Modify Prize
            </DashboardButton>
        </>
    );
}

export default AdminActions;
