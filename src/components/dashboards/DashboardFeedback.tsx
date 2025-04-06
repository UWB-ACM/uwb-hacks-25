import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/src/components/ui/dialog";
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";

export default function DashboardFeedback({
    open,
    setOpen,
    title,
    description,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: React.ReactElement | string;
    description: React.ReactElement | string;
}) {
    return (
        <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
            <DialogContent className="max-w-[90%] sm:max-w-[425px] z-[1000]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>

                <DialogBody>{description}</DialogBody>
            </DialogContent>
        </Dialog>
    );
}
