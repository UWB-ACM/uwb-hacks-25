import { getSession } from "@/src/util/session";
import { getPermissionLevel, getUserFromID } from "@/src/util/db/user";
import React from "react";
import { hasPermissions, PermissionLevel } from "@/src/util/dataTypes";
import UserDashboard from "@/src/components/dashboards/UserDashboard";
import { redirect } from "next/navigation";
import AdminActions from "@/src/components/dashboards/AdminActions";
import StaffActions from "@/src/components/dashboards/StaffActions";
import AdminActionsUser from "@/src/components/dashboards/AdminActionsUser";
import StaffActionsUser from "@/src/components/dashboards/StaffActionsUser";
import StaffQRScanner from "@/src/components/dashboards/staff/StaffQRScanner";

export default async function DashboardPage({
    selectedID,
}: {
    selectedID: string | null;
}) {
    const session = await getSession();

    if (session.user?.id == null) {
        redirect("/api/auth/google");
    }

    const permission = await getPermissionLevel(session.user.id);

    if (permission == null) {
        return <div>Something went wrong</div>;
    }

    const isStaff = hasPermissions(permission, {
        has: PermissionLevel.Staff,
    });

    const isAdmin = hasPermissions(permission, {
        has: PermissionLevel.Admin,
    });

    const selectedUser =
        selectedID && !isNaN(parseInt(selectedID))
            ? await getUserFromID(parseInt(selectedID))
            : null;

    return (
        <>
            <UserDashboard user={session.user} />

            {isStaff && (
                <div className="w-screen min-h-screen">
                    <div className="w-screen py-4 px-8 grid place-content-center">
                        <h2 className="text-3xl text-center">
                            User Management
                        </h2>
                        <h3 className="text-xl text-center">
                            {selectedUser == null
                                ? "No User Selected."
                                : `Currently Modifying User: ${selectedUser.name} (${selectedUser.email} / ${selectedUser.id})`}
                        </h3>
                        <div className="w-full flex flex-row justify-center">
                            <div className="max-w-[200px]">
                                <StaffQRScanner />
                            </div>
                        </div>
                        {/* Container for Buttons */}
                        {selectedUser != null && (
                            <div className="w-[95vw] flex flex-col items-center md:flex-row gap-y-4 md:gap-x-4 justify-center mt-6 flex-wrap">
                                {isAdmin && (
                                    <AdminActionsUser user={selectedUser} />
                                )}

                                {isStaff && (
                                    <StaffActionsUser user={selectedUser} />
                                )}
                            </div>
                        )}
                    </div>

                    <div className="w-screen py-4 px-8 grid place-content-center">
                        <h2 className="text-3xl text-center">Staff Actions</h2>
                        {/* Container for Buttons */}
                        <div className="w-[95vw] flex flex-col items-center md:flex-row gap-y-4 md:gap-x-4 justify-center mt-6 flex-wrap">
                            {isAdmin && <AdminActions />}

                            {isStaff && <StaffActions />}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
