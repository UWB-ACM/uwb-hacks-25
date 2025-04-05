"use client";

import React, { use, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription,
} from "@/src/components/ui/dialog";
import { Checkbox } from "@/src/components/ui/checkbox";
import { TERMS_LEVEL, User } from "@/src/util/dataTypes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Session, SessionUser } from "@/src/util/session";
import {
    actionSetUserLeaderboardConsent,
    actionSetUserTerms,
} from "@/src/util/actions/consent";

export default function ConsentModal({
    sessionPromise,
    consentPromise,
}: {
    sessionPromise: Promise<Session>;
    consentPromise: Promise<Pick<User, "terms" | "leaderboardConsent"> | null>;
}) {
    const session = use(sessionPromise);
    const consent = use(consentPromise);

    if (!session.user?.id || !consent) return null;
    return <ConsentModalInner user={session.user} consent={consent} />;
}

function ConsentModalInner({
    user,
    consent,
}: {
    user: SessionUser;
    consent: Pick<User, "terms" | "leaderboardConsent">;
}) {
    // The default terms level is 0.
    // If that's the case, we should prompt the
    // user to go on the leaderboard by having this default
    // to true.
    // However, if the user has changed it before (i.e., terms != 0),
    // then we should default to their choice.
    const [isLeaderboardConsentChecked, setIsLeaderboardConsentChecked] =
        useState(consent.terms === 0 ? true : consent.leaderboardConsent);
    const router = useRouter();

    const handleAgree = async () => {
        await Promise.all([
            actionSetUserTerms(TERMS_LEVEL),
            actionSetUserLeaderboardConsent(isLeaderboardConsentChecked),
        ]);

        // This modal should no longer display
        // afterward.
        router.refresh();
    };

    const handleDelete = () => {
        // TODO: Implement account deletion logic

        // The user is now logged out.
        router.refresh();
    };

    // Disable pages that we link to, so that
    // the user can read them.
    const pathname = usePathname();
    const disabledPages = ["/privacy", "/tos"];

    // If the user already gave consent,
    // don't show this.
    // Also hide on disabled pages.
    if (consent.terms === TERMS_LEVEL || disabledPages.includes(pathname)) {
        return null;
    }

    return (
        <Dialog open>
            <DialogContent
                className="max-w-[90%] sm:max-w-[425px] z-[1000]"
                hideClose
            >
                <DialogHeader>
                    <DialogTitle className="text-xl">
                        One Last Thing
                    </DialogTitle>
                    <DialogDescription className="text-md">
                        By using this website, you agree to our{" "}
                        <Link
                            href="/tos"
                            target="_blank"
                            className="text-blue-400"
                        >
                            terms of service (click here)
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            target="_blank"
                            className="text-blue-400"
                        >
                            privacy policy (click here)
                        </Link>
                        . If you do not, then you may delete your account below
                        (although doing so will erase your attendance history
                        and Hackeroon balance).
                    </DialogDescription>
                </DialogHeader>

                {/* Leaderboard consent Section */}
                <div className="flex items-center space-x-2 py-4">
                    <Checkbox
                        id="consent-leaderboard-check"
                        checked={isLeaderboardConsentChecked}
                        onCheckedChange={(checked) => {
                            if (typeof checked !== "boolean") return;

                            setIsLeaderboardConsentChecked(checked);
                        }}
                    />
                    <label
                        htmlFor="consent-leaderboard-check"
                        className="text-sm font-medium leading-none"
                    >
                        Show my name ({user.name}), profile picture, and
                        Hackeroon balance on the public leaderboard.
                    </label>
                </div>

                {/* Buttons Section */}
                <DialogFooter className="gap-2">
                    <button
                        className="bg-red-500 border-[1px] border-black rounded-xl p-4"
                        onClick={handleDelete}
                    >
                        Delete Account
                    </button>
                    <button
                        className="bg-green-500 border-[1px] border-black rounded-xl p-4"
                        onClick={handleAgree}
                    >
                        I Agree
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
