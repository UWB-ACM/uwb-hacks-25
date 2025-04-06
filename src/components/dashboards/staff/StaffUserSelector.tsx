"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/src/util/dataTypes";
import SelectorWithSearch from "./SelectorWithSearch";
function StaffUserSelector({ users }: { users: Promise<User[]> }) {
    const router = useRouter();

    const [userList, setUserList] = useState<User[]>([]);

    useEffect(() => {
        users.then((resolvedUsers) => {
            setUserList(resolvedUsers);
        });
    }, [users]);

    return (
        <SelectorWithSearch
            items={userList}
            setItems={setUserList}
            buttonName="Select User"
            dialogName="User Selector"
            id={(user) => user.id}
            email={(user) => user.email}
            title={(user) => user.name + " / " + user.id}
            description={(user) => user.email}
            imageURL={(user) => user.picture}
            onClick={(user) => {
                router.push("/dashboard/" + user.id);
            }}
        />
    );
}

export default StaffUserSelector;
