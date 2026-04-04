// app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | SamvaadAI LLP",
    description:
        "Terms of service for using our platform.",
};

export default function TermsOfService() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>

            <p className="mb-2">
                <strong>Effective Date:</strong> April 2, 2026
            </p>

            <section className="space-y-6">

                {/* 1 */}
                <div>
                    <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our platform, you agree to be bound by these
                        Terms of Service. If you do not agree, you must not use our services.
                    </p>
                </div>

                {/* 2 */}
                <div>
                    <h2 className="text-xl font-semibold">2. Description of Services</h2>
                    <p>We provide a cloud-based platform that enables businesses to:</p>
                    <ul className="list-disc ml-6">
                        <li>Integrate with WhatsApp Business API</li>
                        <li>Send and receive messages</li>
                        <li>Use AI-powered chatbots and automation</li>
                        <li>Manage customer conversations through a CRM</li>
                    </ul>
                </div>

                {/* 3 */}
                <div>
                    <h2 className="text-xl font-semibold">3. WhatsApp Business Integration</h2>
                    <p>
                        Our platform uses APIs provided by Meta Platforms, Inc. By using our
                        services, you agree to:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Comply with WhatsApp Business Policy</li>
                        <li>Use approved message templates where required</li>
                        <li>Maintain valid user consent (opt-in)</li>
                    </ul>
                    <p className="mt-2">
                        We are not responsible for restrictions or bans imposed by WhatsApp.
                    </p>
                </div>

                {/* 4 */}
                <div>
                    <h2 className="text-xl font-semibold">4. Client Responsibilities</h2>
                    <ul className="list-disc ml-6">
                        <li>Provide accurate business information</li>
                        <li>Maintain proper user consent records</li>
                        <li>Comply with applicable laws</li>
                        <li>Be responsible for all messages sent</li>
                    </ul>
                </div>

                {/* 5 */}
                <div>
                    <h2 className="text-xl font-semibold">5. Prohibited Use</h2>
                    <ul className="list-disc ml-6">
                        <li>Sending spam or unsolicited messages</li>
                        <li>Promoting illegal or harmful activities</li>
                        <li>Violating WhatsApp or Meta policies</li>
                        <li>Infringing intellectual property</li>
                    </ul>
                </div>

                {/* 6 */}
                <div>
                    <h2 className="text-xl font-semibold">6. Data Handling</h2>
                    <p>
                        You retain ownership of your data. We act as a data processor and
                        use data only to provide services with appropriate security
                        measures.
                    </p>
                </div>

                {/* 7 */}
                <div>
                    <h2 className="text-xl font-semibold">7. Service Availability</h2>
                    <p>
                        We strive for high uptime but do not guarantee uninterrupted
                        services, as we depend on third-party providers.
                    </p>
                </div>

                {/* 8 */}
                <div>
                    <h2 className="text-xl font-semibold">8. Suspension and Termination</h2>
                    <p>We may suspend or terminate your account if:</p>
                    <ul className="list-disc ml-6">
                        <li>You violate these terms</li>
                        <li>You breach WhatsApp policies</li>
                        <li>Payments are overdue</li>
                        <li>Required by law</li>
                    </ul>
                </div>

                {/* 9 */}
                <div>
                    <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
                    <p>
                        We are not liable for indirect damages, message failures, or business
                        losses. Liability is limited to fees paid by you.
                    </p>
                </div>

                {/* 10 */}
                <div>
                    <h2 className="text-xl font-semibold">10. Changes to These Terms</h2>
                    <p>
                        We may update these Terms at any time. Continued use means you accept
                        the updated Terms.
                    </p>
                </div>

                {/* 11 */}
                <div>
                    <h2 className="text-xl font-semibold">11. Governing Law</h2>
                    <p>These Terms are governed by the laws of India.</p>
                </div>

                {/* 12 */}
                <div>
                    <h2 className="text-xl font-semibold">12. Contact Information</h2>
                    <p>
                        Email:{" "}
                        <a href="mailto:team@samvaadai.com" className="text-blue-600 underline">
                            team@samvaadai.com
                        </a>
                        <br />
                        Company: SamvaadAI LLP
                    </p>
                </div>
            </section>
        </main>
    );
}
