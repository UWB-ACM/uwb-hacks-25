"use server";

import React from "react";
import { getSession } from "@/src/util/session";

export default async function TestUserName() {
    const session = await getSession();

    
    return <p>Hello, {session.user?.name ?? "Unauthenticated User"}</p>;
}
