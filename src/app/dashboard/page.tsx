import { getSession } from "@/src/util/session";
import { getPermissionLevel } from "@/src/util/db/user";
import React from "react";
import { PermissionLevel } from "@/src/util/dataTypes";
import StaffDashboard from "@/src/components/dashboards/StaffDashboard";
import AdminDashboard from "@/src/components/dashboards/AdminDashboard";
import UserDashboard from "@/src/components/dashboards/UserDashboard";

export default async function UserPage({}: {
    params: Promise<{ id: string }>;
}) {
    const session = await getSession();

    if (session?.user === undefined) {
        return <div>Not logged in</div>;
    }
    const permission = await getPermissionLevel(session?.user.id);

    let content = <div>Something went wrong</div>;

    if (permission === null) {
        return content;
    }

    if (permission === PermissionLevel.Admin) {
        content = <AdminDashboard user={session.user} />;
    } else if (permission === PermissionLevel.Staff) {
        content = <StaffDashboard user={session.user} />;
    } else if (permission === PermissionLevel.User) {
        content = <UserDashboard user={session.user} />;
    }

    return content;
}
