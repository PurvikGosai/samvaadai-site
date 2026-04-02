// app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | SamvaadAI LLP",
    description:
        "How SamvaadAI LLP collects, uses, and protects data on its SamvaadAI WhatsApp Business SaaS platform.",
};

export default function PrivacyPolicy() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-10">Last updated: April 2, 2026</p>

            {/* 1 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p className="mb-3">
                    We provide AI-powered communication services including WhatsApp
                    Business API integrations, chatbots, and automation tools. This
                    Privacy Policy explains how we collect, use, and protect your data.
                </p>
                <p>
                    This Privacy Policy explains how we collect, use, store, and protect data when businesses
                    use our platform and related services.
                </p>
            </section>

            {/* 2 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">2. Scope of This Policy</h2>
                <p className="mb-3">This Privacy Policy applies to:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Our platform and services</li>
                    <li>WhatsApp Business integrations enabled through our platform</li>
                    <li>Data processed on behalf of our client businesses</li>
                </ul>
                <p>
                    This policy does not apply directly to the end customers of our client businesses. Client
                    businesses are responsible for obtaining consent from their own customers.
                </p>
            </section>

            {/* 3 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">3. Information We Collect</h2>

                <h3 className="font-semibold mt-5 mb-2">a) Business Account Information</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Business name and business ID</li>
                    <li>WhatsApp Business Account ID (WABA ID)</li>
                    <li>Phone Number ID</li>
                    <li>Display name and profile information</li>
                </ul>

                <h3 className="font-semibold mt-5 mb-2">b) Messaging Data</h3>
                <ul className="list-disc list-inside space-y-1 mb-2">
                    <li>Message content sent or received via WhatsApp Business API</li>
                    <li>Message metadata (timestamps, delivery status, read status)</li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                    We do not read or use message content for marketing or profiling purposes.
                </p>

                <h3 className="font-semibold mt-5 mb-2">c) Technical Information</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>IP address</li>
                    <li>API usage logs</li>
                    <li>Webhook event data</li>
                </ul>
            </section>

            {/* 4 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">4. How We Use Information</h2>
                <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Enable WhatsApp Business messaging for client businesses</li>
                    <li>Send transactional and operational messages</li>
                    <li>Provide delivery status and message logs</li>
                    <li>Ensure platform security and compliance</li>
                </ul>
                <p>We do not use WhatsApp data for advertising or unrelated purposes.</p>
            </section>

            {/* 5 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">5. WhatsApp Business Integration</h2>
                <p className="mb-3">
                    Our platform integrates with the WhatsApp Business Cloud API provided by Meta Platforms,
                    Inc.
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Onboarding is performed via Meta&apos;s Embedded Signup flow</li>
                    <li>Business and phone number verification are handled by Meta</li>
                    <li>Messaging is governed by WhatsApp Business policies</li>
                </ul>
            </section>

            {/* 6 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">6. Data Sharing</h2>
                <p className="mb-3">We do not sell, rent, or trade personal data.</p>
                <p className="mb-2">Data may be shared only with:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Meta Platforms, Inc. (for WhatsApp message delivery)</li>
                    <li>Infrastructure providers strictly for service operation</li>
                </ul>
            </section>

            {/* 7 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Messaging metadata may be retained for operational purposes</li>
                    <li>Message content is retained only as required for service delivery</li>
                    <li>Data may be deleted upon service termination</li>
                </ul>
            </section>

            {/* 8 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">8. Data Security</h2>
                <p className="mb-3">
                    We implement reasonable technical and organizational safeguards including:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Secure API authentication</li>
                    <li>Access control mechanisms</li>
                    <li>Encrypted communication where applicable</li>
                </ul>
            </section>

            {/* 9 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">9. Client Responsibilities</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Obtaining end-user consent</li>
                    <li>Compliance with applicable data protection laws</li>
                    <li>Managing opt-in and opt-out mechanisms</li>
                </ul>
            </section>

            {/* 10 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">10. Your Rights</h2>
                <p>
                    Businesses using our platform may request access, correction, or deletion of their data by
                    contacting us.
                </p>
            </section>

            {/* 11 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">11. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Updates will be posted on this page
                    with a revised &quot;Last updated&quot; date.
                </p>
            </section>

            {/* 12 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-3">12. Contact Information</h2>
                <p>
                    Email:{" "}
                    <a href="mailto:team@samvaadai.com" className="text-blue-600 underline">
                        team@samvaadai.com
                    </a>
                    <br />
                    Company: SamvaadAI LLP
                </p>
            </section>
        </main>
    );
}