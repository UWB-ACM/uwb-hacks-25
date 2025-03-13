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
            {/* <Header
                links={[
                    {
                        id: "sponsor",
                        name: "Sponsor",
                        url: "/sponsor",
                    },
                    {
                        id: "tracks",
                        name: "Tracks",
                        url: "/sponsor/tracks",
                    },
                    {
                        id: "luncheon",
                        name: "Luncheon",
                        url: "/sponsor/luncheon",
                    },
                    {
                        id: "activities",
                        name: "Actvities",
                        url: "/sponsor/activities",
                    },
                    {
                        id: "workshops",
                        name: "Workshops",
                        url: "/sponsor/workshops",
                    },
                ]}
            /> */}
            {children}
        </div>
    );
}
