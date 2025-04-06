import React from "react";
import Header from "@/src/components/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | UWB Hacks 25",
};

const PrivacyPolicy = () => {
    return (
        <>
            <Header links={[]} />
            <div className="p-4 md:p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">
                    UWB Hacks Privacy Policy
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                    Effective Date: April 5th, 2025
                </p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        1. Introduction
                    </h2>
                    <p className="mb-2">
                        UWB Hacks (&quot;Event&quot;), operated by the
                        Association for Computing Machinery at the University of
                        Washington Bothell (&quot;ACM at UWB&quot;,
                        &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), is
                        committed to protecting your privacy. This Privacy
                        Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website
                        (the &quot;Site&quot;) and participate in the Event.
                        Please read this policy carefully.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        2. Information We Collect
                    </h2>
                    <p className="mb-2">
                        We may collect information about you in a variety of
                        ways. The information we may collect on the Site
                        includes:
                    </p>
                    <ul className="list-disc list-inside mb-2 pl-4">
                        <li>
                            <strong>
                                Personal Data Provided via Google
                                Authentication:
                            </strong>{" "}
                            When you register or log in using Google
                            Authentication, we access information you have
                            explicitly authorized Google to share with us, which
                            typically includes your name, email address, profile
                            picture, and your unique Google user ID.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> We may automatically
                            collect information about your device and how you
                            interact with our Site, such as your IP address,
                            browser type, operating system, access times, and
                            the pages you have viewed directly before and after
                            accessing the Site. This is typically done through
                            server logs or analytics tools.
                        </li>
                        <li>
                            <strong>Cookies:</strong> We use cookies primarily
                            for authentication purposes to manage your session
                            and keep you logged in. These are essential for the
                            functionality requiring user accounts. We may also
                            use cookies for analytics or site preferences. You
                            can control cookie settings through your browser.
                        </li>
                        <li>
                            <strong>Hackeroon Data:</strong> We track your
                            Hackeroon balance, which is associated with your
                            account.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        3. How We Use Your Information
                    </h2>
                    <p className="mb-2">
                        Having accurate information about you permits us to
                        provide you with a smooth, efficient, and customized
                        experience. Specifically, we may use information
                        collected about you via the Site or Event to:
                    </p>
                    <ul className="list-disc list-inside mb-2 pl-4">
                        <li>Create and manage your account.</li>
                        <li>
                            Facilitate your participation in the UWB Hacks
                            event.
                        </li>
                        <li>
                            Operate the Hackeroon system and track balances.
                        </li>
                        <li>
                            Display parts of your profile (name, profile
                            picture, total earned Hackeroon amount) publicly on
                            leaderboards or participant lists, *only if you
                            provide explicit consent* to do so.
                        </li>
                        <li>
                            Communicate with you regarding your account or the
                            Event (e.g., updates, announcements, support).
                        </li>
                        <li>
                            Monitor and analyze usage and trends to improve the
                            Site and Event experience.
                        </li>
                        <li>
                            Administer the Event, including verification,
                            support, and enforcement of rules and terms.
                        </li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        4. Disclosure of Your Information
                    </h2>
                    <p className="mb-2">
                        We may share information we have collected about you in
                        certain situations:
                    </p>
                    <ul className="list-disc list-inside mb-2 pl-4">
                        <li>
                            <strong>
                                With Your Consent for Public Display:
                            </strong>{" "}
                            If you opt-in, we may display your name, profile
                            picture, and total earned Hackeroon amount on
                            public-facing parts of the Site (e.g.,
                            leaderboards).
                        </li>
                        <li>
                            <strong>Event Staff and Organizers:</strong>{" "}
                            Designated Event staff and organizers will have
                            access to your account information (name, email,
                            profile picture, Google ID, Hackeroon balance,
                            transaction history, event attendance history) as
                            necessary to manage the Event, provide support, and
                            enforce rules.
                        </li>
                        <li>
                            <strong>By Law or to Protect Rights:</strong> If we
                            believe the release of information about you is
                            necessary to respond to legal process, to
                            investigate or remedy potential violations of our
                            policies, or to protect the rights, property, and
                            safety of others, we may share your information as
                            permitted or required by any applicable law, rule,
                            or regulation.
                        </li>
                        <li>
                            <strong>Third-Party Service Providers:</strong> We
                            may share your information with third-party vendors,
                            service providers, contractors, or agents who
                            perform services for us or on our behalf (e.g.,
                            website hosting, data analysis, email delivery). We
                            require these third parties to maintain the
                            confidentiality of your information and use it only
                            for the purposes for which we disclose it to them.
                        </li>
                    </ul>
                    <p className="mt-2">
                        We do not sell your personal information to third
                        parties.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        5. Security of Your Information
                    </h2>
                    <p className="mb-2">
                        We use administrative, technical, and physical security
                        measures to help protect your personal information.
                        While we have taken reasonable steps to secure the
                        personal information you provide to us, please be aware
                        that despite our efforts, no security measures are
                        perfect or impenetrable, and no method of data
                        transmission can be guaranteed against any interception
                        or other type of misuse.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        6. Your Choices and Rights
                    </h2>
                    <ul className="list-disc list-inside mb-2 pl-4">
                        <li>
                            <strong>Account Information & Deletion:</strong> You
                            may review or change the information in your account
                            or terminate your account at any time by accessing
                            your account settings on the dashboard or by
                            contacting us using the contact information provided
                            below. Upon your request to terminate your account,
                            we will deactivate or delete your account and
                            information from our active databases. However, some
                            information may be retained in our files to prevent
                            fraud, troubleshoot problems, assist with any
                            investigations, enforce our Terms of Service, and/or
                            comply with legal requirements.
                        </li>
                        <li>
                            <strong>Public Display Consent:</strong> You can
                            typically manage your consent for public display of
                            your information (name, profile picture, total
                            earned Hackeroon amount) through your account
                            settings.
                        </li>
                        <li>
                            <strong>Cookies:</strong> Most web browsers are set
                            to accept cookies by default. If you prefer, you can
                            usually choose to set your browser to remove cookies
                            and to reject cookies. If you choose to remove
                            cookies or reject cookies, this could affect certain
                            features or services of our Site, particularly
                            authentication.
                        </li>
                        <li>
                            <strong>Emails and Communications:</strong> You may
                            opt out of receiving non-essential emails (e.g.,
                            newsletters, promotional emails) from us by
                            following the unsubscribe link in those emails or by
                            contacting us. You will still receive essential
                            emails related to your account and participation in
                            the Event.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        7. Policy for Children
                    </h2>
                    <p className="mb-2">
                        UWB Hacks does not knowingly solicit information from or
                        market to children under the age of 13. If we learn that
                        we have collected personal information from a child
                        under age 13 without verification of parental consent,
                        we will take steps to delete that information as quickly
                        as possible. If you believe we might have any
                        information from or about a child under 13, please
                        contact us.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        8. Changes to This Privacy Policy
                    </h2>
                    <p className="mb-2">
                        We may update this Privacy Policy from time to time. We
                        will notify you of any changes by posting the new
                        Privacy Policy on the Site and updating the
                        &quot;Effective Date&quot; at the top. You are advised
                        to review this Privacy Policy periodically for any
                        changes. Changes to this Privacy Policy are effective
                        when they are posted on this page.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">
                        9. Contact Us
                    </h2>
                    <p>
                        If you have questions or comments about this Privacy
                        Policy, please contact us at: acmuwbothell@gmail.com.
                    </p>
                </section>
            </div>
        </>
    );
};

export default PrivacyPolicy;
