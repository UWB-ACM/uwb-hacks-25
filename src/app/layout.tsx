import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const rubikMonoOne = Rubik_Mono_One({
    variable: "--font-rubik-mono-one",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "UWB HACKS 2025",
    description: "UWB HACKS 2025",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${rubikMonoOne.variable} antialiased w-screen`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
