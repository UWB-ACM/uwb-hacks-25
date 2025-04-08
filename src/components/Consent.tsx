import { getSession } from "@/src/util/session";
import { Suspense } from "react";
import ConsentModal from "@/src/components/ConsentModal";
import { getUserConsent } from "@/src/util/db/user";

/**
 * Displays a consent modal if the user
 * needs to agree to the terms.
 */
export default async function Consent() {
    const session = getSession();
    const consent = session.then((session) =>
        session.user?.id ? getUserConsent(session.user?.id) : null,
    );

    // Lazy load the consent modal.
    return (
        <Suspense>
            <ConsentModal sessionPromise={session} consentPromise={consent} />
        </Suspense>
    );
}
