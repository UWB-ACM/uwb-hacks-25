import React from "react";
import { User } from "@/src/util/dataTypes";
import { FaGift } from "react-icons/fa6";
import DashboardButton from "@/src/components/dashboards/DashboardButton";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AdminActionsUser({ user }: { user: User }) {
    // TODO: Make these actual actions.
    return (
        <>
            <DashboardButton href="#">
                <FaGift className="h-[30px] w-[30px]" />
                Modify User
            </DashboardButton>
        </>
    );
}

export default AdminActionsUser;
