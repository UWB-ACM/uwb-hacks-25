import React from "react";
import Header from "@/src/components/header/StaffHeader";

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
