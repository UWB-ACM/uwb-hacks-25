import React from "react";
import DashboardPage from "@/src/app/dashboard/DashboardPage";

export default async function SelectedDashboard({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const selectedID = (await params).id;

    return <DashboardPage selectedID={selectedID} />;
}
