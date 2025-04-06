"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/src/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { actionDeleteUserSelf } from "@/src/util/actions/user";
import { useRouter } from "next/navigation";

function DeleteAccountButton() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                <DialogTrigger className="bg-red-500 border-[1px] border-black rounded-xl p-4">
                    Delete Account
                </DialogTrigger>

                <DialogContent className="max-w-[90%] sm:max-w-[425px] z-[1000]">
                    <DialogHeader>
                        <DialogTitle className="text-xl">
                            Are You Sure?
                        </DialogTitle>
                        <DialogDescription className="text-md">
                            Deleting your account will erase your attendance
                            history and Hackeroon balance. If you&apos;re sure,
                            confirm your choice with the button below.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Buttons Section */}
                    <DialogFooter className="gap-2">
                        <button
                            className="bg-red-500 border-[1px] border-black rounded-xl p-4"
                            onClick={async () => {
                                await actionDeleteUserSelf();
                                router.refresh();
                            }}
                        >
                            Delete Account
                        </button>
                        <button
                            className="bg-green-500 border-[1px] border-black rounded-xl p-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Go Back
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default DeleteAccountButton;
