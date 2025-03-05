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
                        name: "Why Work With Us",
                        url: "/sponsor",
                    },
                    {
                        id: "prizes",
                        name: "Prizes",
                        url: "/sponsor/prizes",
                    },
                    {
                        id: "judging",
                        name: "Judging",
                        url: "/sponsor/judging",
                    },
                    {
                        id: "hackeroons",
                        name: "Hackeroons",
                        url: "/sponsor/hackeroons",
                    },
                    {
                        id: "workshops",
                        name: "Workshops",
                        url: "/sponsor/workshops",
                    },
                    {
                        id: "other",
                        name: "Other",
                        url: "/sponsor/other",
                    },
                ]}
            />
            {children}
        </div>
    );
}
