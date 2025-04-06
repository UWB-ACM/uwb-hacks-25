"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";

// @ts-expect-error The library doesn't exactly conform to what NextJS expects.
const Scanner = dynamic(() => import("react-qr-barcode-scanner"));

function StaffQRScanner() {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogTrigger className="bg-blue-300 border-[1px] border-black rounded-xl p-4">
                Scan QR Code
            </DialogTrigger>

            <DialogContent className="max-w-[90%] sm:max-w-[425px] z-[1000]">
                <DialogHeader>
                    <DialogTitle>QR Code Scanner</DialogTitle>
                </DialogHeader>

                <Suspense>
                    <Scanner
                        onUpdate={(err, result) => {
                            if (err || !result) return;

                            const prefix = "https://uwbhacks.com/dashboard/";

                            const text = result.getText();

                            if (text.startsWith(prefix)) {
                                const id = parseInt(
                                    text.substring(prefix.length),
                                );
                                if (!isNaN(id)) {
                                    router.push("/dashboard/" + id, {
                                        // This makes QR scanning on the dashboard
                                        // more seamless.
                                        scroll: false,
                                    });
                                    setIsOpen(false);

                                    return;
                                }
                            }
                        }}
                    />
                </Suspense>
            </DialogContent>
        </Dialog>
    );
}

export default StaffQRScanner;
