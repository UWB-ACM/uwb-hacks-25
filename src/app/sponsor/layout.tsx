import React from "react";
import Header from "@/src/components/header/Header";
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
            <Header
                links={[
                    {
                        id: "sponsor",
                        name: "Sponsor",
                        url: "/sponsor",
                    },
                    {
                        id: "prizes",
                        name: "Prizes",
                        url: "/sponsor/prizes",
                    },
                    {
                        id: "luncheon",
                        name: "Luncheon",
                        url: "/sponsor/luncheon",
                    },
                    {
                        id: "demo-day-fair",
                        name: "Demo Fair",
                        url: "/sponsor/demo-day-fair",
                    },
                    {
                        id: "workshops",
                        name: "Workshops",
                        url: "/sponsor/workshops",
                    },
                ]}
            />
            {children}
        </div>
    );
}
