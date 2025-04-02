import React from "react";
import Link from "next/link";
import { getSession } from "@/src/util/session";
import { Metadata } from "next";
import { ensureStaffPermission } from "@/src/util/staff";
import CheckInCodeGenerator from "@/src/components/dashboards/userdashboard/CheckInCodeGenerator";

export const metadata: Metadata = {
    title: "Create Check-In Code | UWB Hacks 25",
};

export default async function Page() {
    const session = await getSession();
    await ensureStaffPermission(session);

    // returning the card with user information
    return (
        // centering all the content on the screen
        <div className="h-screen grid place-content-center">
            {/* the actual card with all the user data */}
            <div className="h-[80vh] w-[90vw] md:w-[60vw] lg:w-[40vw] bg-neutral-100 p-5 flex flex-col justify-between rounded-md border-2 border-black shadow-lg">
                {/* main content of the user, separate from the exit button */}
                <div>{session.user && <CheckInCodeGenerator />}</div>
                {/* exit button that returns user back to staff dashboard */}
                <Link
                    className="py-3 rounded-lg text-center bg-red-500 text-white"
                    href={`/dashboard/`}
                >
                    Exit
                </Link>
            </div>
        </div>
    );
}
