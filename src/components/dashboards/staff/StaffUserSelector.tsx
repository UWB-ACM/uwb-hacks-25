"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { User } from "@/src/util/dataTypes";
import Selector from "@/src/components/dashboards/staff/Selector";

function StaffUserSelector({ users }: { users: Promise<User[]> }) {
    const router = useRouter();

    return (
        <Selector
            items={users}
            buttonName="Select User"
            dialogName="User Selector"
            id={(user) => user.id}
            title={(user) => user.name + " / " + user.id}
            description={(user) => user.email}
            imageURL={(user) => user.picture}
            onClick={(user) => {
                router.push("/dashboard/" + user.id, {
                    // This makes QR scanning on the dashboard
                    // more seamless.
                    scroll: false,
                });
            }}
        />
    );
}

export default StaffUserSelector;
