import React from "react";
import Header from "@/src/components/header/Header";

const TermsOfService = () => {
    return (
        <>
            <Header links={[]} />
            <div className="p-4 md:p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">
                    UWB Hacks Terms of Service
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                    Effective Date: April 5th, 2025
                </p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        1. Introduction
                    </h2>
                    <p className="mb-2">
                        Welcome to UWB Hacks (the &quot;Event&quot;), operated
                        by the Association for Computing Machinery at the
                        University of Washington Bothell (&quot;ACM at
                        UWB&quot;, &quot;we&quot;, &quot;us&quot;,
                        &quot;our&quot;). These Terms of Service
                        (&quot;Terms&quot;) govern your access to and use of the
                        UWB Hacks website (the &quot;Site&quot;) and
                        participation in the Event. By accessing the Site or
                        participating in the Event, you agree to be bound by
                        these Terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        2. User Accounts and Authentication
                    </h2>
                    <p className="mb-2">
                        To participate fully in the Event and access certain
                        features of the Site (like the dashboard and Hackeroon
                        system), you may need to register for an account. We use
                        Google Authentication for account creation and login.
                    </p>
                    <p className="mb-2">
                        By authenticating with Google, you authorize us to
                        access certain information from your Google account,
                        including your name, email address, profile picture, and
                        Google user ID. We use this information solely for the
                        purposes of managing your participation in the Event,
                        operating the Site, and as described in our Privacy
                        Policy.
                    </p>
                    <p className="mb-2">
                        We use authentication cookies to keep you logged in and
                        manage your session. You are responsible for maintaining
                        the confidentiality of your account access.
                    </p>
                    <p className="mb-2">
                        You may delete your account at any time through the user
                        dashboard on the Site. Deleting your account will remove
                        your personal information associated with the Event,
                        subject to limitations outlined in our Privacy Policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        3. Hackeroons (Event Currency)
                    </h2>
                    <p className="mb-2">
                        UWB Hacks utilizes a system called
                        &quot;Hackeroons&quot; which functions as a form of
                        event-specific points or currency. Hackeroons are
                        awarded to participants for various activities and
                        achievements during the Event period, at the sole
                        discretion of the Event organizers.
                    </p>
                    <p className="mb-2">
                        <strong>Important Disclaimers about Hackeroons:</strong>
                    </p>
                    <ul className="list-disc list-inside mb-2 pl-4">
                        <li>
                            Hackeroons are <strong>not real money</strong> and
                            have <strong>no cash value</strong>.
                        </li>
                        <li>
                            There is absolutely{" "}
                            <strong>no expectation or guarantee</strong> that
                            Hackeroons can be converted into real currency or
                            any cash equivalent.
                        </li>
                        <li>
                            Hackeroons may potentially be redeemed for prizes or
                            merchandise during or after the Event, but this is
                            entirely at the{" "}
                            <strong>
                                sole discretion of the Event organizers
                            </strong>
                            . The availability, type, and value of any potential
                            prizes are subject to change without notice, and
                            redemption may be denied for any reason.
                        </li>
                        <li>
                            Event organizers reserve the right to{" "}
                            <strong>award or deduct Hackeroons</strong> from any
                            user account for any reason, including but not
                            limited to participation, rule violations, or system
                            adjustments, without prior notice.
                        </li>
                        <li>
                            Your total earned Hackeroon amount may be publicly
                            displayed if you consent (see Section 4).
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        4. User Information and Public Display
                    </h2>
                    <p className="mb-2">
                        By creating an account and participating in UWB Hacks,
                        you grant ACM at UWB a worldwide, non-exclusive,
                        royalty-free license to use, display, reproduce, and
                        distribute the information you provide via Google
                        Authentication (specifically your name and profile
                        picture) and your Hackeroon balance for purposes related
                        to operating the Event and the Site.
                    </p>
                    <p className="mb-2">
                        If you explicitly consent (e.g., through a setting in
                        your user dashboard or profile), we may display your
                        name, profile picture, and total earned Hackeroon amount
                        publicly on the Site, for instance, on leaderboards or
                        participant lists. You can typically manage this consent
                        setting within your account dashboard.
                    </p>
                    <p className="mb-2">
                        Event staff and designated organizers will have access
                        to your account details (name, email, profile picture,
                        Google ID, Hackeroon balance, transaction history, event
                        attendance history) for the purposes of administering
                        the Event, providing support, and ensuring compliance
                        with these Terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        5. Code of Conduct
                    </h2>
                    <p className="mb-2">
                        All participants are expected to adhere to the
                        Event&apos;s Code of Conduct (which may be provided
                        separately). We expect respectful and collaborative
                        behavior. Harassment, discrimination, or any disruptive
                        behavior will not be tolerated and may result in
                        disqualification and removal from the Event and Site
                        access revocation.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        6. Disclaimers and Limitation of Liability
                    </h2>
                    <p className="mb-2">
                        The Site and Event are provided on an &quot;as is&quot;
                        and &quot;as available&quot; basis without any
                        warranties of any kind, express or implied. ACM at UWB
                        disclaims all warranties, including, but not limited to,
                        warranties of merchantability, fitness for a particular
                        purpose, and non-infringement.
                    </p>
                    <p className="mb-2">
                        To the fullest extent permitted by law, ACM at UWB, its
                        organizers, volunteers, sponsors, and affiliates shall
                        not be liable for any indirect, incidental, special,
                        consequential, or punitive damages, or any loss of
                        profits or revenues, whether incurred directly or
                        indirectly, or any loss of data, use, goodwill, or other
                        intangible losses, resulting from (a) your access to or
                        use of or inability to access or use the Site or Event;
                        (b) any conduct or content of any third party on the
                        Site or at the Event; or (c) unauthorized access, use,
                        or alteration of your transmissions or content.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        7. Intellectual Property
                    </h2>
                    <p className="mb-2">
                        The Site and its original content (excluding
                        user-provided information like profile pictures or
                        project submissions), features, and functionality are
                        and will remain the exclusive property of ACM at UWB and
                        its licensors. Project submissions created by
                        participants during the hackathon generally remain the
                        intellectual property of the participants, subject to
                        any specific rules announced for the Event.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        8. Governing Law
                    </h2>
                    <p className="mb-2">
                        These Terms shall be governed and construed in
                        accordance with the laws of the State of Washington,
                        United States, without regard to its conflict of law
                        provisions.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        9. Changes to Terms
                    </h2>
                    <p className="mb-2">
                        We reserve the right, at our sole discretion, to modify
                        or replace these Terms at any time. If a revision is
                        material, we will provide notice prior to any new terms
                        taking effect. What constitutes a material change will
                        be determined at our sole discretion. By continuing to
                        access or use our Site or participate in the Event after
                        any revisions become effective, you agree to be bound by
                        the revised terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">
                        10. Contact Us
                    </h2>
                    <p>
                        If you have any questions about these Terms, please
                        contact us at acmuwbothell@gmail.com.
                    </p>
                </section>
            </div>
        </>
    );
};

export default TermsOfService;
