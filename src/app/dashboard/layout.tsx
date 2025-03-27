import React from "react";
import Header from "@/src/components/header/Header";
import { Metadata } from "next";
import { logoutUser } from "@/src/util/logout";

export const metadata: Metadata = {
    title: "Staff Dashboard | UWB Hacks 25",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`w-screen`}>
            <Header
                links={[
                    {
                        id: "logout",
                        name: "Logout",
                        url: "/dashboard",
                        customOnClick: logoutUser,
                    },
                ]}
            />

            {children}
        </div>
    );
}
