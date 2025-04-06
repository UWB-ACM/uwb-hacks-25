"use client";

import { SessionUser } from "@/src/util/session";
import { Checkbox } from "@/src/components/ui/checkbox";
import React, { useRef, useState } from "react";
import { actionSetUserLeaderboardConsent } from "@/src/util/actions/user";

export default function LeaderboardConsent({
    initialLeaderboardConsent,
    user,
}: {
    initialLeaderboardConsent: boolean;
    user: SessionUser;
}) {
    const [isLeaderboardConsentChecked, setIsLeaderboardConsentChecked] =
        useState(initialLeaderboardConsent);

    const reqData = useRef<{ toSet: boolean | null; isLoading: boolean }>({
        toSet: null,
        isLoading: false,
    });

    // To avoid spamming requests to the server, or having
    // two requests race against each other, we use reqData.current.isLoading
    // to enforce that this function is only running once.
    const setChecked = async (checked: boolean) => {
        setIsLeaderboardConsentChecked(checked);
        reqData.current.toSet = checked;

        // If we aren't currently loading, that means
        // we need to initiate the set request.
        // However, if we are loading, then the new state
        // will get picked up by the currently running function.
        if (reqData.current.isLoading) {
            return;
        }

        reqData.current.isLoading = true;
        try {
            await actionSetUserLeaderboardConsent(checked);
            reqData.current.isLoading = false;

            // If the value stored in toSet has differed (i.e., the checkbox
            // was clicked while we were loading), then
            // we need to recurse with the new value.
            if (reqData.current.toSet !== checked) {
                await setChecked(reqData.current.toSet);
            }
        } catch (e) {
            reqData.current.isLoading = false;
            throw e;
        }
    };

    return (
        <div className="flex items-center space-x-2 py-4">
            <Checkbox
                id="consent-leaderboard-check-comp"
                checked={isLeaderboardConsentChecked}
                onCheckedChange={(checked) => {
                    if (typeof checked !== "boolean") return;

                    setChecked(checked);
                }}
            />
            <label
                htmlFor="consent-leaderboard-check-comp"
                className="text-sm font-medium leading-none"
            >
                Show my name ({user.name}), profile picture, and total earned
                Hackeroon amount on the public leaderboard.
            </label>
        </div>
    );
}
