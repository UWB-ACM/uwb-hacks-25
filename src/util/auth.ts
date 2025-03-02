import "server-only";

import { google } from "googleapis";

export const googleAuth = () =>
    new google.auth.OAuth2(
        process.env.GOOGLE_ID,
        process.env.GOOGLE_SECRET,
        `${process.env.BASE_URL}/api/auth/callback/google`,
    );
