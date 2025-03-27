import React from "react";
import DashboardPage from "@/src/app/dashboard/DashboardPage";

export default async function NoSelectedDashboard() {
    return <DashboardPage selectedID={null} />;
}
