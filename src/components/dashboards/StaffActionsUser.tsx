import React from "react";
import { FaGift } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import { User } from "@/src/util/dataTypes";
import DashboardButton from "@/src/components/dashboards/DashboardButton";

function StaffActionsUser({ user }: { user: User }) {
    return (
        <>
            <DashboardButton href={`/dashboard/buy-prizes/${user.id}`}>
                <FaGift className="h-[30px] w-[30px]" />
                Buy Prizes
            </DashboardButton>

            <DashboardButton href={`/dashboard/transfer-hackeroons/${user.id}`}>
                <BiTransferAlt className="h-[40px] w-[40px]" />
                Transfer Hackeroons
            </DashboardButton>

            <DashboardButton href={`/dashboard/modify-user/${user.id}`}>
                <FaUserEdit className="h-[30px] w-[30px]" />
                Modify User Account
            </DashboardButton>
        </>
    );
}

export default StaffActionsUser;
