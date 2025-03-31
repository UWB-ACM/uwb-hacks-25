import React from "react";
import Header, { handleLogout } from "@/src/components/header/Header";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dashboard | UWB Hacks 25",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} w-screen`}>
            <Header
                links={[
                    {
                        id: "logout",
                        name: "Logout",
                        customOnClick: handleLogout,
                    },
                ]}
            />

            {children}
        </div>
    );
}
