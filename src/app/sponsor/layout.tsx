import React from "react";
import Header from "@/src/components/header/SponsorHeader";
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
            <Header />
            {children}
        </div>
    );
}
