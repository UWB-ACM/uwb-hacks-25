"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

// @ts-expect-error The library doesn't exactly conform to what NextJS expects.
const Scanner = dynamic(() => import("react-qr-barcode-scanner"));

function StaffQRScanner() {
    const router = useRouter();

    return (
        <Suspense>
            <Scanner
                onUpdate={(err, result) => {
                    if (err || !result) return;

                    const prefix = "https://uwbhacks.com/staff/user/";

                    const text = result.getText();

                    if (text.startsWith(prefix)) {
                        const id = parseInt(text.substring(prefix.length));
                        if (!isNaN(id)) {
                            router.push("/staff/user/" + id);
                            return;
                        }
                    }
                }}
            />
        </Suspense>
    );
}

export default StaffQRScanner;
