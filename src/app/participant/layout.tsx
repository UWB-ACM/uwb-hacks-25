import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/src/components/header/MainHeader";
import "@/src/app/globals.css";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Participant Dashboard | UWB Hacks 25",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
