import React from "react";
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className="flex flex-col text-black h-16 flex justify-center items-center">
                <p className="text-center">&copy; 2025 UWB ACM</p>
                <div className="flex flex-row gap-5">
                    <Link href="/tos">Terms of Service</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </footer>
        </>
    );
}

export default Footer;
