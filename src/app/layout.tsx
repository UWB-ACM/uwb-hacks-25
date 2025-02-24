import type { Metadata } from "next";
import React from "react";
import { Inter, Rubik_Mono_One, Open_Sans } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "../util/lenis";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400"],
});

const openSans = Open_Sans({
    variable: "--font-opensans",
    subsets: ["latin"],
    weight: ["400"],
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
            <head>
                <title>UWB Hacks 2025</title>
                <link rel="icon" href="/iconplaceholder.ico" sizes="any" />
            </head>
            <body
                className={`${inter.variable} ${openSans.variable} ${rubikMonoOne.variable} antialiased w-screen`}
            >
                <ReactLenis root>{children}</ReactLenis>
            </body>
        </html>
    );
}
