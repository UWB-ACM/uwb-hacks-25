import React from "react";
import { Metadata } from "next";

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
            {/* IMPLEMENT !!!!! */}
            {/* <Header
            navItems={[
                {
                    id: "prizes",
                    name: "Buy Prizes",
                    url: "/staff/buy-prizes",
                },
                {
                    id: "modify-user",
                    name: "Modify User",
                    url: "/staff/modify-user",
                },
                {
                    id: "transfer-hackeroons",
                    name: "Transfer Hackeroons",
                    url: "/staff/transfer-hackeroons",
                },
                {
                    id: "dashboard",
                    name: "Dashboard",
                    url: "/staff",
                },
            ]}
            /> */}

            {children}
        </div>
    );
}
